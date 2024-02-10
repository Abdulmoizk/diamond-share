import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "./index.scss";
import ThemeButton from "./button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  GoogleAuthProvider,
  auth,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../config/db/Firebase";

function LoginCard() {
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user, "successfull login with google");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "successfull login with email and password");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log(data);
  };

  console.log(watch("example"));
  return (
    <div className="login-card">
      <div className="center-div">
        <div className="sec-1">
          <p>Welcome Back!</p>
          <Button
            onClick={() => googleLogin()}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="">Email</label>
              <br />
              <input
                placeholder="*Enter your email address"
                type="text"
                {...register("email", {
                  required: "*Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "*Invalid Email Address",
                  },
                })}
              />
              <span>{errors.email && <p>{errors.email.message}</p>}</span>
            </div>
            <div>
              <label htmlFor="">Password</label>
              <br />
              <input
                placeholder="*Enter your password"
                type="password"
                {...register("password", {
                  required: "*Password is required",
                  minLength: {
                    value: 8,
                    message: "*Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "*Password must not exceed 20 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "*Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
                  },
                })}
              />
              <span>{errors.password && <p>{errors.password.message}</p>}</span>
            </div>
            <div className="check-box">
              <span>
                <input type="checkbox" {...register("remeberMe")} /> Remember Me
              </span>
              <Link>Forgot your password?</Link>
            </div>

            <div>
              <ThemeButton submit={"submit"} title={"Log In"} />
            </div>
          </form>
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
{
  /* <AppForm /> */
}
