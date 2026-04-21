'use client'
  
export default function Page(){
  return (
    <div>
      <section >
        <footer >
          <p style={styles.text}>© {new Date().getFullYear()} Caveman Magic</p>
          <p style={styles.subtext}>Forged in Stone. Powered by Runes.</p>

          <div style={styles.links}>
            <a href="/" style={styles.link}>Home</a>
            <a href="/story" style={styles.link}>Story</a>
            <a href="/characters" style={styles.link}>Characters</a>
            <a href="/runes" style={styles.link}>Runes</a>
            <a href="/download" style={styles.link}>Download</a>
          </div>
        </footer>
      </section>
    </div>
  );
};

const styles = {
  text: {
    color: "#ffb347",
    fontSize: "1.2rem",
    marginBottom: "0.3rem",
  },

  subtext: {
    color: "#ffb347",
    fontSize: "1rem",
    marginBottom: "1rem",
    opacity: 0.8,
  },

  links: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "1rem",
  },

  link: {
    color: "#ffb347",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "0.2s",
  },
};
