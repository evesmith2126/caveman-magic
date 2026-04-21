import { Navbar } from "../components/Navbar";
import  FooterPage from "../components/Features/Footer";

export default function Page()
{
  return (
    <div style={styles.container}>
      <Navbar/><br />
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
          as the <strong>Stonecasters</strong>, warriors and shamans capable of bending nature,
          fire, and spirit to their will. But with power came danger — monstrous
          beasts awakened from the depths, drawn to the magic’s pulse.
        </p>

        <p style={styles.text}>
          You are one of the last Stonecasters. Your journey begins at the mouth of
          the Ember Cave, where ancient secrets — and ancient threats — await.
        </p>

        <p style={styles.text}>
          The runes themselves were not merely symbols. Each one hummed with a
          distinct resonance, a living echo of the world’s earliest forces. Some
          pulsed with the warmth of molten rock, others shimmered with the whisper
          of wind, and a few radiated a cold so ancient it seemed to freeze time
          itself. To the untrained, these runes were dangerous relics. But to a
          Stonecaster, they were the keys to shaping reality.
        </p>

        <p style={styles.text}>
          Legends speak of the <strong>First Caster</strong>, a lone wanderer who discovered the
          Rune of Dawn — a stone etched with swirling patterns of gold and crimson.
          With it, they brought light to the valley during the Long Night, a time
          when the sun vanished for seven cycles. It was this act that united the
          scattered tribes and forged the first alliance of cavemen.
        </p>

        <p style={styles.text}>
          But unity never lasts. As tribes grew stronger, so did their hunger for
          power. The Rune Wars erupted — a brutal conflict where Stonecasters clashed
          with elemental fury. Forests burned, rivers boiled, and mountains cracked
          under the weight of unleashed magic. When the dust settled, only a handful
          of runes remained intact, hidden away by those who feared what mankind
          might become if they were ever found again.
        </p>

        <p style={styles.text}>
          Centuries passed. The world healed. The Rune Wars faded into myth. But
          deep beneath the earth, the runes continued to glow — waiting for someone
          worthy to claim them once more.
        </p>

        <p style={styles.text}>
          Recently, tremors have shaken the valley. Strange lights flicker across
          mountaintops at night. Hunters whisper of creatures with stone‑hard skin
          and ember‑lit eyes stalking the forests. The elders fear that the
          <strong>Deep Ones</strong> — ancient guardians created to protect the runes — have begun
          to awaken again.
        </p>

        <p style={styles.text}>
          And so, the tribes have turned to you. Not because you are the strongest,
          nor the oldest, but because the runes respond to your touch. When you
          place your hand upon the stone, it glows brighter than it has in a
          thousand years. The elders believe this is a sign — that you are destined
          to restore balance, or plunge the world into chaos once more.
        </p>

        <p style={styles.text}>
          Your first task is to enter the <strong>Ember Cave</strong>, the birthplace of the
          earliest Stonecasters. It is said that within its fiery depths lies the
          <strong>Rune of Sparks</strong>, a fragment of pure elemental fire. Many have tried to
          claim it. None have returned. The walls of the cave shift like living
          magma, and the air hums with ancient power. But if you succeed, you will
          wield a force capable of reshaping the world.
        </p>

        <p style={styles.text}>
          Beyond the Ember Cave lies the <strong>Shattered Plains</strong>, a land fractured by
          the Rune Wars. Here, stone pillars rise like broken teeth from the earth,
          each one etched with forgotten runes. Spirits wander the plains, trapped
          between life and death, whispering warnings to those who dare to listen.
          Some say the plains themselves are alive, shifting and rearranging to
          protect the secrets buried beneath.
        </p>

        <p style={styles.text}>
          Further still is the <strong>Frostwind Expanse</strong>, a frozen wasteland where the
          Rune of Winter is said to slumber beneath layers of ancient ice. The
          Frostwind is home to colossal beasts — mammoths with crystalline tusks,
          wolves with fur like drifting snow, and the legendary Ice Serpent, whose
          breath can freeze a man solid in seconds.
        </p>

        <p style={styles.text}>
          But not all threats come from beasts or spirits. A new tribe has risen in
          the east — the <strong>Ashborn</strong>, descendants of Stonecasters who once sought to
          dominate the world. They believe the runes should not be hidden but used
          to forge a new age of power. Their leader, a mysterious figure known only
          as <strong>The Ember King</strong>, has already claimed one of the lost runes and seeks
          the rest.
        </p>

        <p style={styles.text}>
          Your destiny is intertwined with his. The runes have chosen both of you,
          but only one can shape the future. Will you restore balance to the world,
          or will the fires of ambition consume everything once more?
        </p>

        <p style={styles.text}>
          The journey ahead is perilous, but the runes whisper your name. The earth
          trembles beneath your feet. The spirits watch from the shadows. And the
          ancient magic of the world stirs once more.
        </p>

        <p style={styles.text}>
          Step forward, Stonecaster. Your legend begins now.
        </p>

      </section>
      <FooterPage/>
    </div>
  );
};

const styles = {
  footer: {
    marginTop: "4rem",
    padding: "2rem 1rem",
    background: "#241f18",
    borderTop: "3px solid #ffb347",
    boxShadow: "0 -4px 15px rgba(255,180,70,0.3)",
    textAlign: "center" as const,
  },

  text: {
    color: "white",
    fontSize: "1.1rem",
    marginBottom: "0.3rem",
  },

  subtext: {
    color: "#ffb347",
    fontSize: "0.9rem",
    opacity: 0.8,
  },

  container: {
    background: "#3b2a1a",
    color: "white",
    padding: "4rem 2rem",
    fontFamily: "sans-serif",
  },
  section: {
     maxWidth: "800px",
     margin: "0 auto" 
    },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    textAlign: "center" 
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.7", 
    marginBottom: "1.5rem" 
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#705834",
    color: "white",
    alignItems: "center",
  },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  links: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    cursor: "pointer",
  },
};
