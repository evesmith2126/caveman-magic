import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/story" style={styles.link}>story</Link>
      <Link href="/characters" style={styles.link}>Characters</Link>
      <Link href="/runes" style={styles.link}>Runes</Link>
      <Link href="/download" style={styles.link}>Download</Link>
      <Link href="/Login" style={styles.link}>Login</Link>
      <Link href="/signup" style={styles.link}>sign up</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "2rem",
    padding: "1rem 2rem",
    background: "#241f18",
    borderBottom: "3px solid #ffb347",
    boxShadow: "0 0 15px rgba(255,180,70,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    
  },

  link: {
    color: "white",
    fontSize: "1.2rem",
    textDecoration: "none",
    transition: "0.25s",
  },
};
