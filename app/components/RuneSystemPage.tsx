import React from "react"

export const RuneSystemPage: React.FC = () => {
  const runes = [
    {
      name: "🔥 Ember Rune",
      desc: "Harness the primal heat of the earth. Used for fireballs, lava bursts, and igniting traps.",
      color: "#ff6b3b",
    },
    {
      name: "🌿 Terra Rune",
      desc: "Channel the strength of stone and soil. Summon barriers, quake the ground, or harden your skin.",
      color: "#8bc34a",
    },
    {
      name: "💨 wind Rune",
      desc: "Control wind and movement. Dash quickly, push enemies back, or leap great distances.",
      color: "#81d4fa",
    },
    {
      name: "🌑 Spirit Rune",
      desc: "Tap into ancient spirits. Reveal hidden paths, stun enemies, or communicate with lost souls.",
      color: "#b39ddb",
    },
  ];
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Rune & Magic System</h1>

      <p style={styles.intro}>
        In <strong>Caveman Magic</strong>, runes are ancient symbols carved into stone,
        each holding a fragment of elemental or spiritual power. Only a true
        Stonecaster can awaken their potential.
      </p>

      <section style={styles.section}>
        <h2 style={styles.heading}>How Runes Work</h2>
        <p style={styles.text}>
          Each rune grants unique abilities. Combine them to create powerful spell
          variations — fire‑dash, stone‑shield, spirit‑guided attacks, and more.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Rune Types</h2>

        <div style={styles.grid}>
          {runes.map((rune) => (
            <div key={rune.name} style={{ ...styles.card, borderColor: rune.color }}>
              <h3 style={{ ...styles.runeName, color: rune.color }}>{rune.name}</h3>
              <p style={styles.text}>{rune.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    background: "#3b2a1a",
    color: "white",
    padding: "4rem 2rem",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "2rem",
  },
  intro: {
    maxWidth: "800px",
    margin: "0 auto 3rem",
    fontSize: "1.2rem",
    lineHeight: "1.7",
    textAlign: "center",
  },
  section: {
    maxWidth: "900px",
    margin: "0 auto 3rem",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  card: {
    background: "#4a3523",
    padding: "1.5rem",
    borderRadius: "10px",
    borderWidth: "3px",
    borderStyle: "solid",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  runeName: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
};
