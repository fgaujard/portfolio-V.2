import { Helmet } from "react-helmet";

import snapshot from "./assets/snapshot.png";

export default function SearchEngineOpt() {
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
    <Helmet>
      <meta
        name="description"
        content="Explore the portfolio of Flavien Gaujard, a web developer based in Chartres, France. Discover his projects and skills in web development."
      />
      <meta
        name="keywords"
        content="web development, web developer, portfolio, Flavien Gaujard, Chartres, France, React, Javascript, CSS, HTML, Sassy, SCSS, French developer."
      />

      {/* Open Graph meta tags for Facebook and LinkedIn */}
      <meta
        property="og:title"
        content="Flavien Gaujard - Web Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Explore the portfolio of Flavien Gaujard, a web developer based in Chartres, France. Discover his projects and skills in web development."
      />
      <meta
        property="og:image"
        content={`https://flavien-gaujard.com${snapshot}`}
      />
      <meta property="og:url" content="https://flavien-gaujard.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Flavien Gaujard - Web Developer Portfolio"
      />
      <meta
        name="twitter:description"
        content="Explore the portfolio of Flavien Gaujard, a web developer based in Chartres, France. Discover his projects and skills in web development."
      />
      <meta
        name="twitter:image"
        content={`https://flavien-gaujard.com${snapshot}`}
      />

      <link rel="canonical" href="https://flavien-gaujard.fr" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
