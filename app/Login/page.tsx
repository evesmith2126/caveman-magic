import Link from "next/link";

export default function Page() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Caveman Magic</h1>
        <p style={styles.subtitle}>Enter the Ancient Realm</p>

        <div style={styles.form}>
          <input
            type="text"
            placeholder="Stonecaster Name"
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Secret Rune Password"
            required
            style={styles.input}
          />

          {/* Correct Link usage */}
          <Link href="/user" style={{ textDecoration: "none" }}>
            <div style={styles.button}>Enter the Cave</div>
          </Link>
        </div>

        <p style={styles.footerText}>
          New here?{" "}
          <Link href="/signup" style={styles.link}>
            Create an account
          </Link>
        </p>
      </div>

      {/* Glowing animated rune */}
      <Link href="/runes" style={styles.rune}>
        ᚠ
      </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    background: "rgb(0, 0, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },

  container: {
    background: "rgba(20, 15, 10, 0.85)",
    padding: "3rem 2.5rem",
    borderRadius: "15px",
    border: "3px solid #ffb347",
    boxShadow: "0 0 25px rgba(255, 180, 70, 0.4)",
    textAlign: "center",
    width: "350px",
    color: "white",
    fontFamily: "sans-serif",
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },

  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    opacity: 0.8,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  input: {
    padding: "0.8rem 1rem",
    borderRadius: "8px",
    border: "2px solid #ffb347",
    background: "#2a221b",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "0.2s",
  },

  button: {
    padding: "0.9rem",
    background: "#ffb347",
    borderRadius: "8px",
    fontSize: "1.1rem",
    cursor: "pointer",
    textAlign: "center",
    transition: "0.2s",
  },

  footerText: {
    marginTop: "1.5rem",
    fontSize: "0.9rem",
    opacity: 0.8,
  },

  link: {
    color: "#ffb347",
    cursor: "pointer",
    textDecoration: "none",
  },

  rune: {
    position: "absolute",
    bottom: "40px",
    right: "100px",
    fontSize: "4rem",
    color: "#ffb347",
    opacity: 0.4,
    animation: "pulse 2.5s infinite ease-in-out",
  },
} as const;
