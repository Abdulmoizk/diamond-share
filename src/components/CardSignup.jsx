import "./index.scss";
import ThemeButton from "./button";
import { Link } from "react-router-dom";

function SignupCard() {
  return (
    <div className="login-card">
        <div className="div-div">

      <div className="center-div">
        <div className="sec-2">
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your password" />
          </div>

          <div>
            <ThemeButton title={"Create Free Account"} />
          </div>
          <p>
            Already Member? <Link to={"/login"}>Log In</Link>
          </p>
        </div>
       
      </div>
        </div>
    </div>
  );
}

export default SignupCard;
