import School42 from "../assets/skills/42.svg";
import WCS from "../assets/skills/WCS.svg";
import Auto from "../assets/skills/Auto.png";

export default function Skills() {
  return (
    <section id="skills" className="app-body_skills">
      <article className="article-skills">
        <img src={School42} alt="School Logo" loading="lazy" />
        <div className="article-skills_title">
          <h1>42 School</h1>
          <p className="article-skills_date">Sept.2018 - Mar.2020</p>
        </div>
        <div className="article-skills_block">
          <h2 className="article-skills_subtitle">Skills :</h2>
          <ul>
            <li>CLI</li>
            <li>C</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Linux</li>
            <li>Docker</li>
          </ul>
        </div>
      </article>
      <article className="article-skills">
        <img src={WCS} alt="School Logo" loading="lazy" />
        <div className="article-skills_title">
          <h1>Wild Code School</h1>
          <p className="article-skills_date">Sept.2023 - Feb.2024</p>
        </div>
        <div className="article-skills_block">
          <h2 className="article-skills_subtitle">Skills :</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>NPM</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Agile</li>
            <li>Scrum</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Express.js</li>
            <li>Argon2</li>
            <li>JWT</li>
            <li>JSON</li>
          </ul>
        </div>
      </article>

      <article className="article-skills">
        <img src={Auto} alt="School Logo" loading="lazy" />
        <div className="article-skills_title">
          <h1>Auto Learning</h1>
        </div>
        <div className="article-skills_block">
          <h2 className="article-skills_subtitle">Skills :</h2>
          <ul>
            <li>Adobe CC</li>
            <li>Figma</li>
            <li>Sassy SCSS</li>
            <li>Material UI</li>
            <li>Spline</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
