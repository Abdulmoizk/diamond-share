import { useEffect, useState } from "react";
import "../pages/home/css/Style.scss";
import CardSidebar from "./CardSidebar";
import Textarea from "./textarea";
import ThemeButton from "./button";
import Dropzone from "./dropzone";
import FilesList from "./fileslist";
import { ImDownload } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { db, set, ref, onValue, remove } from "../config/db/Firebase";

function MainCard({ childData }) {
  const [type, setType] = useState("text");
  const [textValue, setTextValue] = useState("");
  const [files, setFiles] = useState([]);
  const [isText, setIsText] = useState(false);

  const updateType = (newType) => {
    setType(newType);
  };
  const onDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };
  const deleteAll = () => {
    setFiles([]);
  };
  const saveChanges = () => {
    set(ref(db, "sharing"), {
      text: textValue,
    });
    console.log(textValue);
  };
  useEffect(() => {
    const starCountRef = ref(db, "sharing");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTextValue(data.text);
      if (data.text) {
        setIsText(true);
      }
    });
  }, []);
  const clearData = async () => {
    await remove(ref(db, "sharing"));
    setTextValue("");
    setIsText(false);
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
        ) : (
          <div className="file-section">
            <div className="file-header">
              <h1>Files</h1>
              <div className="file-btn">
                <div className="download">
                  <ImDownload />
                  <span>Download All</span>
                </div>
                <div onClick={() => deleteAll()} className="delete">
                  <MdDelete />
                  <span>Delete All</span>
                </div>
              </div>
            </div>
            {!files.length ? (
              <Dropzone
                title={
                  <p>Drag 'n' drop some files here, or click to select files</p>
                }
                onDrop={onDrop}
              />
            ) : (
              <FilesList files={files} onDrop={onDrop} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default MainCard;
