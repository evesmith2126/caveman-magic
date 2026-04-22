import React from "react";

export const Features: React.FC = () => {
  const features = [
    {
      title: "Stone‑Age Spells",
      desc: "Cast magic using ancient runes carved into stone tablets.",
    },
    {
      title: "Explore the Wild",
      desc: "Travel through forests, caves, and volcanic lands full of secrets.",
    },
    {
      title: "Battle Prehistoric Beasts",
      desc: "Face mammoths, sabertooths, and magical creatures of legend.",
    },
  ];

  return (
    <section style={
      styles.section
      }>
      <h2 style={styles.heading}>Game Features</h2>
      <div style={styles.grid}>
        {features.map((f) => (
          <div key={f.title} style={styles.card}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { padding: "4rem 2rem", textAlign: "center" },
  heading: { fontSize: "2rem", marginBottom: "2rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  card: {
    background: "#4a3523",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
};
