"use client";
import React, { useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";

export default function PlayPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Try to start ambient audio quietly (browser may block until interaction)
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
    }
  }, []);

  return (
    <div style={styles.container}>
      {/* Ambient audio (looped) */}
      <audio
        ref={audioRef}
        src="/audio/cave-ambience.mp3"
        loop
        autoPlay
      />

      {/* PARTICLES + TORCH LIGHT */}
      <div className="particle-layer"></div>
      <div className="torch-flicker"></div>

      {/* NAVBAR */}
      <Navbar/>

      <section className="cinematic-intro" style={styles.hero}>
        <div style={styles.tabletFrame}>
          <h1 style={styles.title}>Play Caveman Magic</h1>
          <p style={styles.subtitle}>
            Step into the ancient world of stone and fire. Choose how you want to play.
          </p>

          <div style={styles.buttonRow}>
            <a href="/webgl" className="magic-btn rune-activate">
              🌐 Play in Browser
            </a>
            <a href="/download" className="magic-btn secondary">
              ⬇️ Download Game
            </a>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Browser Version</h2>
        <p style={styles.text}>
          The WebGL version lets you jump straight into the action without installing anything.
          Best for quick play sessions and testing new updates.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Full Download</h2>
        <p style={styles.text}>
          For the best performance, visuals, and stability, download the full version of Caveman Magic.
          Includes higher‑quality textures, smoother animations, and offline play.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    background: "#1f140d",
    color: "white",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    position: "relative",
    overflow: "hidden",
    paddingBottom: "4rem",
  },
  hero: {
    textAlign: "center",
    padding: "7rem 2rem 4rem",
    position: "relative",
  },
  tabletFrame: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2.5rem 2rem",
    borderRadius: "18px",
    border: "4px solid #5b3a23",
    background:
      "linear-gradient(145deg, rgba(60,38,24,0.95), rgba(30,18,11,0.98))",
    boxShadow:
      "0 0 40px rgba(0,0,0,0.8), 0 0 25px rgba(255,140,0,0.4) inset",
  },
  title: {
    fontSize: "3.5rem",
    marginBottom: "1rem",
    textShadow: "0 0 25px rgba(255,140,0,0.6)",
  },
  subtitle: {
    fontSize: "1.3rem",
    maxWidth: "600px",
    margin: "0 auto 2rem",
    opacity: 0.9,
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  section: {
    maxWidth: "900px",
    margin: "3rem auto",
    padding: "0 1rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.3rem",
    marginBottom: "1rem",
    textShadow: "0 0 15px rgba(255,120,0,0.5)",
  },
  text: {
    fontSize: "1.2rem",
    opacity: 0.85,
    lineHeight: "1.7",
  },
};
