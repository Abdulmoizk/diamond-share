import "./index.scss";
import ThemeButton from "./button";
import { Link } from "react-router-dom";

function FeedbackCard() {
  return (
    <div className="login-card">
      <div className="div-div">
        <div className="center-div">
          <div className="sec-1 feedback">
            <span>Share Your Experience</span>
          </div>
          <div className="sec-2">
            <div>
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div>
              <label htmlFor="">Feedback</label>
              <br />
              <textarea name="feedback" placeholder="Type here" />
            </div>

            <div>
              <ThemeButton title={"Send Feedback"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
