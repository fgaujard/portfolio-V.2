// import SearchEngineOpt from "./SEO";

import Navbar from "./components/Navbar";

import Projects from "./layouts/Projects";
import Home from "./layouts/Home";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";

import "./scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import snapshot from "./assets/snapshot.png";

// Store the image URL in a global variable
window.snapshotURL = `${import.meta.env.APP_URL}${snapshot}`;

function App() {
  return (
    <>
      <Navbar />

      <main className="app-body">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer />
    </>
  );
}

export default App;
