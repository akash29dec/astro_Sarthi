import React from "react";
import Navbar from "../components/Navbar";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Google Login Success:", user);
    // Store user info, redirect to dashboard, etc.
  } catch (error) {
    console.error("Google Login Error:", error);
  }
};

const handleFacebookLogin = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    console.log("Facebook Login Success:", user);
    // Store user info, redirect to dashboard, etc.
  } catch (error) {
    console.error("Facebook Login Error:", error);
  }
};

export default function Login() {
  return (
    <div>
      <Navbar />

      {/* Login Section */}
      <section className="login-bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" id="form1Example3" />
                    <label className="form-check-label ms-2" htmlFor="form1Example3">
                      Remember password
                    </label>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block w-100 mb-3" type="submit">
                    Login
                  </button>

                  <hr className="my-4" />

                  <button
                    className="btn btn-lg btn-block w-100 text-white mb-3"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="button"
                    onClick={handleGoogleLogin}
                  >
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>

                  <button
                    className="btn btn-lg btn-block w-100 text-white"
                    style={{ backgroundColor: "#3b5998" }}
                    type="button"
                    onClick={handleFacebookLogin}
                  >
                    <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
