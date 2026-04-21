import React from "react";
import { Navbar } from "../components/Navbar";


type ElementType = "Spring" | "Summer" | "Autumn" | "Winter";

interface Character {
  id: string;
  name: string;
  title: string;
  season: ElementType;
  tagline: string;
  description: string;
  power: string;
  accentColor: string;
}

const characters: Character[] = [
  {
    id: "veris",
    name: "Veris",
    title: "Bloomcaller",
    season: "Spring",
    tagline: "Where roots wake, hope follows.",
    description:
      "Veris coaxes life from stone and ash, weaving vines through ruins and painting the world in first light greens.",
    power: "Can accelerate growth, heal with pollen, and awaken dormant seeds beneath ancient battlefields.",
    accentColor: "#6BE38F",
  },
  {
    id: "solara",
    name: "Solara",
    title: "Sunforged",
    season: "Summer",
    tagline: "Every shadow is just light waiting to happen.",
    description:
      "Solara bends heat and light into spears, shields, and mirages—turning midday glare into a weapon and a refuge.",
    power: "Channels solar flares, blinds foes with mirage fields, and hardens sand into glass blades.",
    accentColor: "#FFB347",
  },
  {
    id: "cairn",
    name: "Cairn",
    title: "Leaffall Warden",
    season: "Autumn",
    tagline: "All things fall, but not all things are lost.",
    description:
      "Cairn walks with the rustle of leaves, commanding decay and memory—turning what’s fading into quiet strength.",
    power: "Controls falling leaves as blades, drains strength with withering auras, and preserves memories in amber.",
    accentColor: "#FF7F50",
  },
  {
    id: "nyra",
    name: "Nyra",
    title: "Frostbound Oracle",
    season: "Winter",
    tagline: "Silence is where the future speaks loudest.",
    description:
      "Nyra freezes time in shards of ice, reading possible futures in the fractures and snow‑swallowed echoes.",
    power: "Slows time in small zones, conjures blizzards, and traps echoes of spells inside crystal prisms.",
    accentColor: "#7FD0FF",
  },
];

const CharactersPage: React.FC = () => {
  return (
    <div className="characters-page">
      <header className="characters-header">
        <Navbar/>
        <h1 className="characters-title">Caveman Magic: Characters</h1>
        <p className="characters-subtitle">
          Four seasons, four forces—each shaping the world in their own rhythm.
        </p>
      </header>

      <section className="characters-grid">
        {characters.map((c) => (
          <article
            key={c.id}
            className={`character-card character-${c.season.toLowerCase()}`}
            style={{ borderColor: c.accentColor, boxShadow: `0 0 18px ${c.accentColor}55` }}
          >
            <div className="character-aura" style={{ background: c.accentColor }} />
            <div className="character-header">
              <h2 className="character-name">{c.name}</h2>
              <span className="character-title">{c.title}</span>
              <span className="character-season-pill">{c.season}</span>
            </div>

            <p className="character-tagline">“{c.tagline}”</p>

            <p className="character-description">{c.description}</p>

            <div className="character-power">
              <h3>Signature Power</h3>
              <p>{c.power}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default CharactersPage;
