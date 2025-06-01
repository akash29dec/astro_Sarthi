import React from "react";
import Navbar from "../components/Navbar";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const res = await axios.post("http://localhost:5000/api/auth/login", { idToken });
      localStorage.setItem("astroAuthToken", res.data.token);
      const decoded = jwtDecode(res.data.token);
      setUser(decoded);
      // Redirect by role
      if (decoded.role === "astrologer") {
        navigate("/pandit");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Login error");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="login-bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  {/* Optional: Keep email/password fields if you want, or hide for now */}
                  <button
                    className="btn btn-lg btn-block w-100 text-white mb-3"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="button"
                    onClick={() => handleSocialLogin(googleProvider)}
                  >
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>
                  <button
                    className="btn btn-lg btn-block w-100 text-white"
                    style={{ backgroundColor: "#3b5998" }}
                    type="button"
                    onClick={() => handleSocialLogin(facebookProvider)}
                  >
                    <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
