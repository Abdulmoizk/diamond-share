import "./index.scss";
import ThemeButton from "./button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth, createUserWithEmailAndPassword } from "../config/db/Firebase";

function SignupCard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, "successfull signup with email and password");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });


    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="login-card">
      <div className="div-div">
        <div className="center-div">
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
                <span>
                  {errors.password && <p>{errors.password.message}</p>}
                </span>
              </div>

              <div>
                <ThemeButton submit={"submit"} title={"Create Free Account"} />
              </div>
            </form>
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
