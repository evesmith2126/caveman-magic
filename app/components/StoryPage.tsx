import React from "react";
import Footer from "./Features/Footer"; // FIXED

export const StoryPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h1 style={styles.title}>The Legend of Caveman Magic</h1>

        <p style={styles.text}>
          Long before kingdoms rose and fell, before steel and iron shaped the world,
          there was a time when magic flowed through stone itself. In the ancient
          valley of Grum’Thar, cavemen discovered glowing runes buried deep within
          the earth — symbols of power left behind by forgotten beings.
        </p>

        <p style={styles.text}>
          Only a few could harness these runes. These rare individuals became known
          as the **Stonecasters**, warriors and shamans capable of bending nature,
          fire, and spirit to their will. But with power came danger — monstrous
          beasts awakened from the depths, drawn to the magic’s pulse.
        </p>

        <p style={styles.text}>
          You are one of the last Stonecasters. Your journey begins at the mouth of
          the Ember Cave, where ancient secrets — and ancient threats — await.
        </p>
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
  section: { maxWidth: "800px", margin: "0 auto" },
  title: { fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" },
  text: { fontSize: "1.2rem", lineHeight: "1.7", marginBottom: "1.5rem" },
};
