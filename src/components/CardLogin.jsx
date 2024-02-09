import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "./index.scss";
import ThemeButton from "./button";
import { Link } from "react-router-dom";

function LoginCard() {
  return (
    <div className="login-card">
      <div className="center-div">
        <div className="sec-1">
          <p>Welcome Back!</p>
          <Button
            className="google-btn"
            icon={<GoogleOutlined />}
            type="primary"
          >
            Login with Google
          </Button>
          <div>
            <div className="line-div"></div>
            <span>Or</span>
            <div className="line-div"></div>

          </div>
        </div>
        <div className="sec-2">
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <br />
            <input type="text" />
          </div>
          <div className="check-box">
            <span>
              <input type="checkbox" /> Remember Me
            </span>
            <Link>Forgot your password?</Link>
          </div>

          <div>
            <ThemeButton title={"Log In"} />
          </div>
          <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
{
  /* <AppForm /> */
}
