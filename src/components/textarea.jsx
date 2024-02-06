import "./index.scss";
import {useEffect, useRef} from "react";

function Textarea({value, onChange}) {
    const textareaRef = useRef();
    const resizeTextarea = (event) => {
    textareaRef.current.style.height= "24px";
    textareaRef.current.style.height= textareaRef.current.scrollHeight + 12 +"px";
    }
    useEffect(() => {
        resizeTextarea();
    }, [value]);
    
  return (
    <textarea value={value} onChange={onChange} className="text-area" onInput={resizeTextarea} ref={textareaRef} placeholder="Type something..."></textarea>
  );
}
export default Textarea;
