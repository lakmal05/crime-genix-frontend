import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import bgImage from "../assets/images/loginBg.jpg";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useEffect, useState } from "react";
import openImage from "../assets/images/line-md--watch.svg";
import blueLogo from "../assets/images/logo/Logo.png";
import svgTwo from "../assets/images/line-md--watch-off (1).svg";
import { Button } from "antd";
import { signUpService } from "../service/auth";

const SignUpPage = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");

  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");

  const eyeOnAction = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 4) {
      setPasswordError("Password must be at least 4 characters long.");
    } else if (value.length > 50) {
      setPasswordError("Password must not exceed 50 characters.");
    } else {
      setPasswordError("");
    }
  };

  const createAccount = () => {
    let isValidate = false;
    firstName === ""
      ? customToastMsg("Enter your first name", 2)
      : lastName === ""
      ? customToastMsg("Enter your last name", 2)
      : email === ""
      ? customToastMsg("Enter your email", 2)
      : password === ""
      ? customToastMsg("Enter valid password", 2)
      : password.length < 4 || password.length > 50
      ? customToastMsg("Password must be between 4 and 50 characters.", 2)
      : (isValidate = true);

    if (isValidate) {
      const data = {
        email: email.trim(),
        password: password.trim(),
        firstName: firstName,
        lastName: lastName,
      };

      signUpService(data)
        .then((response) => {
          customToastMsg("Your account created successfully", 1);
          history(`/login`);
        })
        .catch((error) => {
          if (error.message) {
            customToastMsg(error.message, 0);
          }
          error.message.email
            ? customToastMsg(error.message.email, 0)
            : error.message.password &&
              customToastMsg(error.message.password, 0);
        });
    }
  };

  return (
    <>
      <main className="main_login w-100 d-flex justify-content-center align-items-center">
        <div className="login-container  ">
          <div className="login-image left-area">
            <img className="lft-img" src={bgImage} alt="Illustration" />
          </div>

          <div className=" position-relative d-flex right-area justify-content-center align-items-center flex-column">
            <div className="login-form">
              <img
                width={110}
                className="logo-imagepng"
                src={blueLogo}
                alt="logo"
              />

              <h3 className="text-start mb-0 mt-3">Welcome to Crime Genix !</h3>

              <p className="text-start text-muted mb-4">
                Please enter your details to create your account.
              </p>

              <form
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    createAccount();
                  }
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label font-weight-medium font-size-4 text-gray-secondary"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label font-weight-medium font-size-4 text-gray-secondary"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label font-weight-medium font-size-4 text-gray-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label font-weight-medium text-gray-secondary">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword === false ? "password" : "text"}
                      className="form-control custom-input"
                      id="password"
                      onChange={(e) => handlePasswordChange(e)}
                      placeholder="Enter your password"
                    />
                    <span className="input-group-text" onClick={eyeOnAction}>
                      {showPassword === false ? (
                        <img
                          style={{ color: "#009990" }}
                          src={svgTwo}
                          alt="eye-off"
                        />
                      ) : (
                        <img
                          style={{ color: "#009990" }}
                          src={openImage}
                          alt="eye-on"
                        />
                      )}
                    </span>
                  </div>
                  {passwordError && (
                    <div
                      className="text-danger mt-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {passwordError}
                    </div>
                  )}
                </div>

                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input custom-checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label text-gray-secondary font-size-5">
                    Remember me
                  </label>
                </div>

                <Button
                  onClick={() => {
                    createAccount();
                  }}
                  type="default"
                  size="large"
                  className="w-100 mb-3 mb-3"
                >
                  Create Account
                </Button>
              </form>

              <p className="text-start text-muted signup-link">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none primary-color">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default SignUpPage;
