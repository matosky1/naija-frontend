import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "../styles/LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // 🔥 Function to translate Firebase errors
  const handleFirebaseError = (code) => {
    switch (code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
        return "Incorrect email or password.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/missing-password":
        return "Please enter your password.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setModalMessage("✅ Logged in successfully!");
        navigate("/"); // Redirect to home
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setModalMessage("🎉 Account created successfully!");
        navigate("/");
      }
      setShowModal(true);
    } catch (err) {
      console.error(err);
      setError(handleFirebaseError(err.code)); // 👈 friendly message
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setModalMessage(" 📨 If this email is registered, a password reset link has been sent. Check your inbox and spam folder.");
      setShowModal(true);
    } catch (err) {
      console.error(err);
      setError(handleFirebaseError(err.code)); // 👈 friendly message
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isLogin && (
            <p className="forgot-password" onClick={handlePasswordReset}>
              Forgot password?
            </p>
          )}

          {error && <p className="error-text">{error}</p>}

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Notification</h3>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
