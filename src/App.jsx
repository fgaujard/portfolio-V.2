import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";

import Projects from "./layouts/Projects";
import Home from "./layouts/Home";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";

import snapshot from "./assets/snapshot.png";

import "./scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Flavien Gaujard",
    url: "https://flavien-gaujard.com",
    image: snapshot,
    sameAs: [
      "https://linkedin.com/in/flavien-gaujard",
      "https://github.com/fgaujard",
    ],
    jobTitle: "Web Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chartres",
      addressRegion: "Centre-Val de Loire",
      addressCountry: "France",
    },
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore the portfolio of Flavien Gaujard, a web developer based in Chartres, France. Discover his projects and skills in web development."
        />
        <meta
          name="keywords"
          content="web development, web developer, portfolio, Flavien Gaujard, Chartres, France, React, Javascript, CSS, HTML, Sassy, SCSS, French developer."
        />
        <link rel="canonical" href="https://flavien-gaujard.fr" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

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
