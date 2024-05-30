import SearchEngineOpt from "./SEO";

import Navbar from "./components/Navbar";

import Projects from "./layouts/Projects";
import Home from "./layouts/Home";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";

import "./scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <SearchEngineOpt />
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
