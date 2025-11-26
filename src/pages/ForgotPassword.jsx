import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "../styles/LoginSignup.css"; // reuse your existing login styles

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("⚠️ Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset link sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      setMessage("❌ " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>
        <p className="info-text">Enter your email to receive a reset link.</p>

        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Send Reset Link
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="extra-links">
          <Link to="/login" className="back-link">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
