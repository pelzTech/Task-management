import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./Auth.css";
import googleLogo from "../assets/gmail2.jpg"; 

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      // Simulate authentication
      localStorage.setItem("auth", true);
      navigate("/");
    }
  };

  const toggleAuth = () => {
    setIsRegistered(!isRegistered);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("auth", true);
      navigate("/");
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h3>{isRegistered ? "Sign in" : "Sign Up"}</h3>
        <form onSubmit={handleSubmit}>
          {!isRegistered && (
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                required={!isRegistered}
              />
            </div>
          )}
          <div>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            {isRegistered ? "Sign in" : "Sign Up"}
          </button>
        </form>
        <button className="btn-link" onClick={toggleAuth}>
          {isRegistered
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign in"}
        </button>
        <button
          className="btn-light"
          onClick={handleGoogleSignIn}
        >
          <img src={googleLogo} alt="Google" />
          Sign in with Gmail
        </button>
      </div>
    </div>
  );
};

export default Auth;
