import { useEffect, useState } from "react";
import "../pages/home/css/Style.scss";
import CardSidebar from "./CardSidebar";
import Textarea from "./textarea";
import ThemeButton from "./button";
import Dropzone from "./dropzone";
import FilesList from "./fileslist";
import { ImDownload } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import {
  db,
  set,
  ref,
  onValue,
  remove,
  storage,
  uploadBytesResumable,
  getDownloadURL,
  storageRef,
} from "../config/db/Firebase";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function MainCard({ childData }) {
  const [type, setType] = useState("text");
  const [textValue, setTextValue] = useState("");
  const [files, setFiles] = useState([]);
  const [isText, setIsText] = useState(false);
  const [tempFiles, settempFiles] = useState([]);

  const updateType = (newType) => {
    setType(newType);
  };
  const onDrop = async (acceptedFiles) => {
    settempFiles([...tempFiles, ...acceptedFiles]);
    let arr = [];
    for (var i = 0; acceptedFiles.length > i; i++) {
      arr.push(uploadFile(acceptedFiles[i], files + i));
    }
    const allFiles = await Promise.all(arr);
    console.log("allFiles", allFiles);
    setFiles([...files, ...allFiles]);
    settempFiles([]);
    set(ref(db, "file-sharing"), {
      files: [...files, ...allFiles],
    });
  };
  const downloadAll = () => {
    let filename = "AllFiles";
    const zip = new JSZip();
    const folder = zip.folder("project");
    files.forEach((file) => {
      const blobPromise = fetch(file.url).then(function (response) {
        if (response.status === 200 || response.status === 0) {
          return Promise.resolve(response.blob());
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      });
      const name = file.name;
      folder.file(name, blobPromise);
    });

    zip
      .generateAsync({ type: "blob" })
      .then((blob) => saveAs(blob, filename))
      .catch((e) => console.log(e));
  };
  const deleteAll = async () => {
    // setFiles([]);
    await remove(ref(db, "file-sharing"));
    setFiles([]);
    settempFiles([]);
  };
  const saveChanges = () => {
    set(ref(db, "text-sharing"), {
      text: textValue,
    });
  };
  useEffect(() => {
    const starCountRef = ref(db, "text-sharing");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTextValue(data.text);
      if (data.text) {
        setIsText(true);
      }
    });
    const fileCountRef = ref(db, "file-sharing");
    onValue(fileCountRef, (snapshot) => {
      const data = snapshot.val();
      setFiles(data.files);
    });
  }, []);
  const clearData = async () => {
    await remove(ref(db, "text-sharing"));
    setTextValue("");
    setIsText(false);
  };
  var expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var regex = new RegExp(expression);
  const links = textValue.match(regex) || [];

  const uploadFile = (file, i) => {
    return new Promise((resolve, reject) => {
      const storageReference = storageRef(storage, `files/files-${i}`);
      const uploadTask = uploadBytesResumable(storageReference, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve({ url: downloadURL, name: file.name, type: file.type });
          });
        }
      );
    });
  };

  return (
    <div className="main-card">
      <CardSidebar setType={updateType} />
      <div className="card-container">
        {type === "text" ? (
          <div className="text-section">
            <h1>Text</h1>
            <div className="resize-section">
              <Textarea
                value={textValue}
                onChange={(e) => {
                  setTextValue(e.target.value);
                  setIsText(false);
                }}
              />
            </div>
            <div className="card-footer">
              <div className="links">
                {links.map((v, i) => (
                  <div key={i}>
                    <span>
                      <a href={v} target="_blank">
                        {" "}
                        {v}{" "}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
              <div className="btn-section">
                <button onClick={() => clearData()} className="clear-btn">
                  Clear
                </button>
                {!isText ? (
                  <ThemeButton
                    onClick={() => saveChanges()}
                    disabled={textValue ? false : true}
                    title={"Save"}
                  />
                ) : (
                  <ThemeButton
                    onClick={() => navigator.clipboard.writeText(textValue)}
                    title={"Copy"}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="file-section">
            <div className="file-header">
              <h1>Files</h1>
              <div className="file-btn">
                <div onClick={() => downloadAll()} className="download">
                  <ImDownload />
                  <span>Download All</span>
                </div>
                <div onClick={() => deleteAll()} className="delete">
                  <MdDelete />
                  <span>Delete All</span>
                </div>
              </div>
            </div>
            {tempFiles.length || files.length ? (
              <FilesList tempFiles={tempFiles} files={files} onDrop={onDrop} />
            ) : (
              <Dropzone
                title={
                  <p>Drag 'n' drop some files here, or click to select files</p>
                }
                onDrop={onDrop}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default MainCard;
