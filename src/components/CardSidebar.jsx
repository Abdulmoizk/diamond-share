import { useState } from "react";
import { BsTextCenter , BsFileEarmarkPlus } from "react-icons/bs";

function CardSidebar({ setType }) {
  const [type, setLocalType] = useState("text");
  const handleTypeChange = (newType) => {
    setType(newType);
    setLocalType(newType);
  };

  return (
    <>
      <div className="card-sidebar ">
        <div
          onClick={() => handleTypeChange("text")}
          className={`sidebar-option ${type === "text" ? "active" : ""}`}
        >
          <BsTextCenter size={50} />
        </div>
        <div
          onClick={() => handleTypeChange("files")}
          className={`sidebar-option ${type === "text" ? "active" : ""}`}
        >
          <BsFileEarmarkPlus size={45} />
        </div>
      </div>
    </>
  );
}
export default CardSidebar;
