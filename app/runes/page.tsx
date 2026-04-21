import { Navbar } from "../components/Navbar";
import { AnimatedRune } from "../components/AnimatedRune";
import Footer from "../components/Features/Footer";

export default function Page(){
  const runes = [
    {
      name: "Fire Rune",
      symbol: "🔥",
      color: "#ff6b3b",
      desc: "Harness the primal heat of the earth. Used for fireballs, lava bursts, and igniting traps.",
      abilities: [
        "Fireball — Launch a blazing projectile",
        "Lava Burst — Erupt molten rock beneath enemies",
        "Ignite — Set traps or torches ablaze",
      ],
    },
    {
      name: "Earth Rune",
      symbol: "🌿",
      color: "#8bc34a",
      desc: "Channel the strength of stone and soil. Summon barriers, quake the ground, or harden your skin.",
      abilities: [
        "Stone Shield — Create a protective barrier",
        "Earthquake — Shake the ground violently",
        "Stone Skin — Temporarily boost defense",
      ],
    },
    {
      name: "Wind Rune",
      symbol: "💨",
      color: "#ffffff",
      desc: "Control wind and movement. Dash quickly, push enemies back, or leap great distances.",
      abilities: [
        "Wind Dash — Burst forward instantly",
        "Gust — Push enemies away",
        "Sky Leap — Jump to unreachable places",
      ],
    },
    {
      name: "Water Rune",
      symbol: "🌊",
      color: "#4fc3f7",
      desc: "Tap into ancient water spirits. Reveal hidden paths, stun enemies, or communicate with lost souls.",
      abilities: [
        "Spirit Vision — Reveal hidden objects",
        "Water Shock — Stun enemies briefly",
        "Soul Echo — Hear whispers from ancient spirits",
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <h1 style={styles.title}>Rune & Magic System</h1>
      <p style={styles.subtitle}>
        Ancient symbols carved into stone, each holding a fragment of elemental power.
      </p>

      <div style={styles.grid}>
        {runes.map((r, i) => (
          <div key={i} style={{ ...styles.card, borderColor: r.color }}>
            <AnimatedRune symbol={r.symbol} color={r.color} animation="pulse"  />

            <h2 style={{ ...styles.name, color: r.color }}>{r.name}</h2>
            <p style={styles.desc}>{r.desc}</p>
            <br />
            <h3 style={styles.abilityTitle}>Abilities</h3>
            <ul style={styles.list}>
              {r.abilities.map((a, index) => (
                <li key={index}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    padding: "0 2rem 3rem 2rem",
    background: "#3b3328",
    minHeight: "100vh",
    color: "white",
    fontFamily: "sans-serif",
  },

  title: {
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "3rem",
    opacity: 0.8,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
  },

  card: {
    background: "#241f18",
    padding: "2rem",
    borderRadius: "15px",
    border: "3px solid",
    transition: "0.25s",
    boxShadow: "0 0 15px rgba(0,0,0,0.4)",
  },

  name: {
    fontSize: "1.8rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    textAlign: "center",
  },

  desc: {
    fontSize: "1rem",
    lineHeight: "1.5",
    textAlign: "center",
    marginBottom: "1rem",
  },

  abilityTitle: {
    fontSize: "1.2rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    textAlign: "center",
    color: "#ffb347",
  },

  list: {
    listStyle: "none",
    padding: 0,
    textAlign: "center",
    lineHeight: "1.6",
  },
};
