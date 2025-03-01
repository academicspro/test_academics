import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

type PasswordField = "password" | "confirmPassword";

const Register2 = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.login2);
  };
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <>
      <div className="container-fuild">
        <div className="login-wrapper w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-lg-flex align-items-center justify-content-center bg-light-300 d-lg-block d-none flex-wrap vh-100 overflowy-auto bg-01">
                <div>
                  <ImageWithBasePath
                    src="assets/img/authentication/authentication-06.svg"
                    alt="Img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                <div className="col-md-8 mx-auto p-4">
                  <form>
                    <div>
                      <div className=" mx-auto mb-5 text-center">
                        <ImageWithBasePath
                          src="assets/img/authentication/authentication-logo.svg"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </div>
                      <div className="card">
                        <div className="card-body p-4">
                          <div className=" mb-4">
                            <h2 className="mb-2">Register</h2>
                            <p className="mb-0">
                              Please enter your details to sign up
                            </p>
                          </div>
                          <div className="mt-4">
                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                              <div className="text-center me-2 flex-fill">
                                <Link
                                  to="3"
                                  className="bg-primary br-10 p-2 btn btn-primary  d-flex align-items-center justify-content-center"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid m-1"
                                    src="assets/img/icons/facebook-logo.svg"
                                    alt="Facebook"
                                  />
                                </Link>
                              </div>
                              <div className="text-center me-2 flex-fill">
                                <Link
                                  to="3"
                                  className=" br-10 p-2 btn btn-outline-light  d-flex align-items-center justify-content-center"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid  m-1"
                                    src="assets/img/icons/google-logo.svg"
                                    alt="Facebook"
                                  />
                                </Link>
                              </div>
                              <div className="text-center flex-fill">
                                <Link
                                  to="3"
                                  className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid  m-1"
                                    src="assets/img/icons/apple-logo.svg"
                                    alt="Apple"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="login-or">
                              <span className="span-or">Or</span>
                            </div>
                            <div className="mb-3 ">
                              <label className="form-label">Name</label>
                              <div className="input-icon mb-3 position-relative">
                                <span className="input-icon-addon">
                                  <i className="ti ti-user" />
                                </span>
                                <input type="text" className="form-control" />
                              </div>
                              <label className="form-label">
                                Email Address
                              </label>
                              <div className="input-icon mb-3 position-relative">
                                <span className="input-icon-addon">
                                  <i className="ti ti-mail" />
                                </span>
                                <input type="text" className="form-control" />
                              </div>
                              <label className="form-label">Password</label>
                              <div className="pass-group mb-3">
                                <input
                                  type={
                                    passwordVisibility.password
                                      ? "text"
                                      : "password"
                                  }
                                  className="pass-input form-control"
                                />
                                <span
                                  className={`ti toggle-passwords ${
                                    passwordVisibility.password
                                      ? "ti-eye"
                                      : "ti-eye-off"
                                  }`}
                                  onClick={() =>
                                    togglePasswordVisibility("password")
                                  }
                                ></span>
                              </div>
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <div className="pass-group">
                                <input
                                  type={
                                    passwordVisibility.confirmPassword
                                      ? "text"
                                      : "password"
                                  }
                                  className="pass-input form-control"
                                />
                                <span
                                  className={`ti toggle-passwords ${
                                    passwordVisibility.confirmPassword
                                      ? "ti-eye"
                                      : "ti-eye-off"
                                  }`}
                                  onClick={() =>
                                    togglePasswordVisibility("confirmPassword")
                                  }
                                ></span>
                              </div>
                            </div>
                            <div className="form-wrap form-wrap-checkbox mb-3">
                              <div className="d-flex align-items-center">
                                <div className="form-check form-check-md mb-0 me-2">
                                  <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                  />
                                </div>
                                <h6 className="fw-normal text-dark mb-0">
                                  I Agree to
                                  <Link to="#" className="hover-a ">
                                    {" "}
                                    Terms &amp; Privacy
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <button
                              onClick={navigationPath}
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="text-center">
                            <h6 className="fw-normal text-dark mb-0">
                              Already have an account?
                              <Link to={routes.login2} className="hover-a ">
                                {" "}
                                Sign In
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <p className="mb-0 ">Copyright © 2024 - Preskool</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register2;
