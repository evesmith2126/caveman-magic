// app/page.tsx

import {Navbar} from "./components/Navbar";
import {HomePage} from "./components/HomePage";

export default function App() {
  return (
    <div style={styles.layout}>
      <Navbar />
      <HomePage />
      <footer />
    </div>
  );
}

const styles = {
  layout: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#3b3328",
  },
  content: {
    flex: 1,
  },
};