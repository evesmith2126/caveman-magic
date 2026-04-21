'use client';

import React from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";

export default function UserPage() {
  const user = {
    name: "user name",
    level: 12,
    xp: 3400,
    runesUnlocked: 7,
    avatar: "🧙‍♀️",
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatar}>{user.avatar}</div>
        <Navbar/>
        <div style={styles.statsBox}>
          <p style={styles.stat}><strong>Level:</strong> {user.level}</p>
          <p style={styles.stat}><strong>XP:</strong> {user.xp}</p>
          <p style={styles.stat}><strong>Runes Unlocked:</strong> {user.runesUnlocked}</p>
        </div><br /><br />
        <Link href="/" style={{ textDecoration: "none" }}>
            <button style={styles.buttons}>log out</button>
        </Link><br /><br />
        <Link href="/setting" style={{ textDecoration: "none" }}>
            <button style={styles.buttons}>settings</button>
        </Link><br /><br />
        <Link href="/setting" style={{ textDecoration: "none" }}>
            <button style={styles.buttons}>profile</button>
        </Link><br /><br />
        <Link href="/characters" style={{ textDecoration: "none" }}>
            <button style={styles.buttons}>character</button>
        </Link>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#3b3328",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },

  card: {
    background: "#2a241d",
    padding: "40px",
    borderRadius: "16px",
    width: "1000px",
    maxWidth: "4500px",
    textAlign: "center",
    border: "3px solid #c49b66",
    boxShadow: "0 0 25px rgba(255, 200, 120, 0.3)",
  },

  avatar: {
    fontSize: "20rem",
    marginBottom: "40px",
    textShadow: "0 0 20px #ffdd99",
  },

  name: {
    color: "#f5d7a1",
    fontSize: "2rem",
    marginBottom: "20px",
  },

  statsBox: {
    background: "#3b3328",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #c49b66",
    marginBottom: "30px",
  },

  stat: {
    color: "#f5d7a1",
    fontSize: "1.2rem",
    margin: "8px 0",
  },

  button: {
    padding: "12px 20px",
    background: "#c49b66",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#2a241d",
    boxShadow: "0 0 10px #c49b66",
    transition: "0.3s",
  },
  buttons: {
  padding: "12px 20px",
  background: "#c49b66",
  border: "none",
  borderRadius: "8px",
  fontSize: "1.2rem",
  cursor: "pointer",
  color: "#2a241d",
  boxShadow: "0 0 10px #c49b66",
  transition: "0.3s",
  marginBottom: "20px",   // ← adds spacing between buttons
  marginRight: "15px",   // ← adds spacing between buttons
},

};
