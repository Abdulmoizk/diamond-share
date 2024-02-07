import { CiFileOn } from "react-icons/ci";
import "./index.scss";
import Dropzone from "./dropzone";
import { FaPlus } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Spin } from "antd";

function FilesList({ tempFiles, files, onDrop }) {
  return (
    <div className="files-list">
      {files.map((file, index) => {
        let icon;
        switch (file.type) {
          case "text/html":
            icon = <FaHtml5 />;
            break;
          case "text/css":
            icon = <FaCss3Alt />;
            break;
          case "text/javascript":
            icon = <IoLogoJavascript />;
            break;
          default:
            icon = <CiFileOn />;
            break;
        }
        return (
          <a className="uploaded-list" key={index} href={file.url} download target="_blank">
            <div >
              {file.type.indexOf("image") !== -1 ? (
                <img className="image-preview" src={file.url} alt={file.name} />
              ) : (
                <>
                  {icon}
                  <span>
                    {file.name.slice(0, 10) + "..."}
                    <strong>
                      {file.name.slice(file.name.lastIndexOf("."))}
                    </strong>
                  </span>
                </>
              )}
            </div>{" "}
          </a>
        );
      })}
      {tempFiles.map((file, index) => {
        let icon;
        switch (file.type) {
          case "text/html":
            icon = <FaHtml5 />;
            break;
          case "text/css":
            icon = <FaCss3Alt />;
            break;
          case "text/javascript":
            icon = <IoLogoJavascript />;
            break;
          default:
            icon = <CiFileOn />;
            break;
        }
        return (
          <div className="uploaded-list temp-file" key={index}>
            {file.type.indexOf("image") !== -1 ? (
              <img
                className="image-preview"
                src={file.url || URL.createObjectURL(file)}
                alt={file.name}
              />
            ) : (
              <>
                {icon}
                <span>
                  {file.name.slice(0, 10) + "..."}
                  <strong>{file.name.slice(file.name.lastIndexOf("."))}</strong>
                </span>
              </>
            )}
            <Spin />
          </div>
        );
      })}

      <div className="app-file-list">
        <Dropzone
          title={
            <>
              <FaPlus />
              <p>
                Add file <br />
                <span>(upto 5mb)</span>
              </p>
            </>
          }
          onDrop={onDrop}
        />
      </div>
    </div>
  );
}
export default FilesList;
