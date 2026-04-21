import Footer from "../components/Features/Footer"

export const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* BACKGROUND PARTICLES */}
      <div className="particle-layer"></div>

      {/* HERO SECTION */}
      <section style={styles.hero}>


        <h1 style={styles.title}>Caveman Magic</h1>
        <p style={styles.subtitle}>
          Ancient runes. Firelight. Stone. A world shaped by primal sorcery.
        </p>

        <div style={styles.buttonRow}>
          <a href="/play" className="magic-btn">Play Now</a>
          <a href="/download" className="magic-btn secondary">Download</a>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>What Awaits You</h2>

        <div style={styles.featureGrid}>
          <div className="feature-card">
            <span className="feature-icon">🔥</span>
            <h3>Elemental Runes</h3>
            <p>Master fire, earth, wind, and spirit magic carved into ancient stone.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🦣</span>
            <h3>Wild Creatures</h3>
            <p>Face mammoths, stone lizards, and beasts awakened by rune energy.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🗿</span>
            <h3>Ancient Ruins</h3>
            <p>Explore forgotten temples and uncover secrets buried beneath the earth.</p>
          </div>
        </div>
      </section>
      <section>
        
      </section>
      {/* Footer */}
      <section>
        <Footer/>
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
  },

  hero: {
    textAlign: "center",
    padding: "7rem 2rem",
    position: "relative",
  },

  title: {
    fontSize: "4rem",
    marginBottom: "1rem",
    textShadow: "0 0 25px rgba(255,140,0,0.6)",
  },

  subtitle: {
    fontSize: "1.4rem",
    maxWidth: "700px",
    margin: "0 auto 2rem",
    opacity: 0.9,
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },

  features: {
    padding: "4rem 2rem",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    textShadow: "0 0 15px rgba(255,120,0,0.5)",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
};
