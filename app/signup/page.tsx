"use client";

import React, { useState } from "react";


export default function Page() {
  const [error, setError] = useState("");

  const handleSignup = (e: any) => {
    e.preventDefault();
    
    setError("Passwords do not match");
    setTimeout(() => setError(""), 2000);
  };

  return (
    <div className="login-container">
      {/* Ambient effects */}
      <div className="particle-layer"></div>
      <div className="torch-flicker"></div>

      <div className="login-frame cinematic-intro">
        <h1 className="login-title">Create Account</h1>
        <p className="login-subtitle">Begin your journey, Stonecaster.</p>

        <form onSubmit={handleSignup} className="login-form">
          <div className="input-wrapper">
            <input type="text" placeholder="Username" className="rune-input" />
          </div>

          <div className="input-wrapper">
            <input type="email" placeholder="Email" className="rune-input" />
          </div>

          <div className="input-wrapper">
            <input type="password" placeholder="Password" className="rune-input" />
          </div>

          <div className="input-wrapper">
            <input type="password" placeholder="Confirm Password" className="rune-input" />
          </div>

          {/* Error message */}
          {error && <p className="error-shake">{error}</p>}

          <button type="submit" className="magic-btn login-btn">
            ✨ Create Account
          </button>

          {/* Link to Login */}
          <p className="signup-link">
            Already have an account?{" "}
            <a href="/Login" className="signup-anchor">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
