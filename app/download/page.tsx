import { Navbar } from "../components/Navbar";
import Footer from "../components/Features/Footer";

export default function Page(){
  return (
    <div style={styles.container}>
      <Navbar/><br /><br /><br />
      <h1 style={styles.title}>Download Caveman Magic</h1>
      <p style={styles.subtitle}>Choose your platform and begin your adventure.</p>

      {/* PLATFORM DOWNLOAD BUTTONS */}
      <div style={styles.buttonGrid}>
        <a href="/downloads/caveman-magic-windows.zip" style={styles.button} className="download-btn">
          <span style={styles.icon}>🪟</span> Windows Download
        </a>
      </div>

      {/* VERSION HISTORY */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Version History</h2>

        <div style={styles.changelog}>
          <div style={styles.logItem}>
            <h3>v1.2.0 — Rune Update</h3>
            <ul>
              <li>Added new Spirit Rune abilities</li>
              <li>Improved cave lighting system</li>
              <li>Fixed mammoth AI getting stuck on rocks</li>
            </ul>
          </div>

          <div style={styles.logItem}>
            <h3>v1.1.0 — Combat Patch</h3>
            <ul>
              <li>New enemy: Stoneback Lizard</li>
              <li>Improved hit detection</li>
              <li>Balanced fire rune damage</li>
            </ul>
          </div>

          <div style={styles.logItem}>
            <h3>v1.0.0 — Initial Release</h3>
            <ul>
              <li>Core story mode</li>
              <li>Four rune types</li>
              <li>Three biomes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>System Requirements</h2>

        <div style={styles.requirements}>
          <div>
            <h3>Minimum</h3>
            <ul>
              <li>CPU: Dual‑core 2.0 GHz</li>
              <li>RAM: 4 GB</li>
              <li>GPU: Intel HD Graphics</li>
              <li>Storage: 1 GB</li>
            </ul>
          </div>

          <div>
            <h3>Recommended</h3>
            <ul>
              <li>CPU: Quad‑core 3.0 GHz</li>
              <li>RAM: 8 GB</li>
              <li>GPU: GTX 1050 / RX 560</li>
              <li>Storage: 1 GB SSD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INSTALL GUIDE */}
      <section style={styles.section}>
        <h2 style={styles.heading}>How to Install</h2>

        <ol style={styles.installList}>
          <li>Download the version for your platform.</li>
          <li>Extract the ZIP file.</li>
          <li>Open the game folder.</li>
          <li>Run <strong>CavemanMagic.exe</strong> (Windows) or the app file (Mac).</li>
          <li>Enjoy your prehistoric adventure!</li>
        </ol>
      </section>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    background: "#2c1a0f",
    color: "white",
    padding: "4rem 2rem",
    fontFamily: "sans-serif",
    minHeight: "100vh",
  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "3rem",
    opacity: 0.9,
  },
  buttonGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: "350px",
    margin: "0 auto 4rem",
  },
  button: {
    padding: "1rem",
    background: "#ffb347",
    borderRadius: "10px",
    color: "#2c1a0f",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "0.25s",
  },
  icon: {
    fontSize: "1.5rem",
  },
  section: {
    marginTop: "3rem",
    maxWidth: "900px",
    margin: "3rem auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  changelog: {
    background: "#3b2a1a",
    padding: "1.5rem",
    borderRadius: "10px",
  },
  logItem: {
    marginBottom: "1.5rem",
  },
  requirements: {
    display: "flex",
    justifyContent: "space-around",
    background: "#3b2a1a",
    padding: "1.5rem",
    borderRadius: "10px",
  },
  installList: {
    background: "#3b2a1a",
    padding: "1.5rem",
    borderRadius: "10px",
    lineHeight: "1.7",
  },
};
