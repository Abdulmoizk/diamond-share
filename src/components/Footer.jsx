import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.scss";

function Footer() {
  return (
    <footer>
      <p>
        © 2024 <span>Diamond Share</span>
      </p>
      <p>
        Made with mentorship of <br /> <span>Sir Ghous Ahmed</span> by{" "}
        <span>Abdul Moiz</span>{" "}
      </p>
      <div>
        <Link to={"https://github.com/Abdulmoizk/diamond-share"}>
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
