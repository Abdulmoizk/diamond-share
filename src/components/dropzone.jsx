import { useDropzone } from "react-dropzone";
import "./index.scss";

function Dropzone({ title, onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="drop-zone" {...getRootProps()}>
      <input {...getInputProps()} />
      <div>{title}</div>
    </div>
  );
}

export default Dropzone;
