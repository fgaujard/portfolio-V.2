import React, { useEffect } from "react";

function LogoScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    if (marqueeContent) {
      root.style.setProperty(
        "--marquee-elements",
        marqueeContent.children.length
      );

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content">
        <li>
          <i className="fab fa-linux" alt="Linux Icon" />
        </li>
        <li>
          <i className="fab fa-docker" alt="Docker Icon" />
        </li>
        <li>
          <i className="fab fa-vuejs" alt="Vue Icon" />
        </li>
        <li>
          <i className="fab fa-react" alt="React Icon" />
        </li>
        <li>
          <i className="fab fa-square-js" alt="JavaScript Icon" />
        </li>
        <li>
          <i className="fab fa-css3-alt" alt="CSS Icon" />
        </li>
        <li>
          <i className="fab fa-html5" alt="HTML Icon" />
        </li>
        <li>
          <i className="fab fa-sass" alt="Sassy CSS Icon" />
        </li>
        <li>
          <i className="fab fa-node" alt="Node.js Icon" />
        </li>
        <li>
          <i className="fab fa-figma" alt="Figma Icon" />
        </li>
        <li>
          <i className="fab fa-stripe" alt="Stripe Icon" />
        </li>
        <li>
          <i className="fab fa-npm" alt="NPM Icon" />
        </li>
        <li>
          <i className="fab fa-git-alt" alt="Git Icon" />
        </li>
        <li>
          <i className="fab fa-github" alt="Github Icon" />
        </li>
        <li>
          <i className="fab fa-gitlab" alt="Gitlab Icon" />
        </li>
        <li>
          <i className="fab fa-google" alt="Google Icon" />
        </li>
      </ul>
    </div>
  );
}

export default LogoScroll;
