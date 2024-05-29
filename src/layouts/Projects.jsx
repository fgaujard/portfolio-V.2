import projectsData from "../services/data";

export default function Projects() {
  const ifExist = (element) => {
    if (element !== "") {
      return true;
    }
    return false;
  };

  return (
    <section id="projects" className="app-body_projects">
      <h1 className="projects-title">‟ Dive into my digital playground „</h1>
      <h2 className="projects-subtitle">
        Web Development \ Web Design \ 3D & Animations
      </h2>
      <div className="projects-article">
        {projectsData.map((project) => (
          <article
            className="projects-article_container"
            alt="Project realized by Flavien GAUJARD."
            key={project.id}
          >
            <div className="projects-article_left">
              <img
                src={project.img}
                loading="lazy"
                alt="Illustration of the associated project"
              />
              <div className="projects-article_link">
                {ifExist(project.figma) && (
                  <a
                    href={project.figma}
                    target="_blank"
                    alt="Open the Figma file"
                    label="Figma Link"
                    name="Figma"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-figma" />
                  </a>
                )}
                {ifExist(project.github) && (
                  <a
                    href={project.github}
                    target="_blank"
                    alt="Open the Github project"
                    label="Github Link"
                    name="Github"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                )}
                {ifExist(project.url) && (
                  <a
                    href={project.url}
                    target="_blank"
                    alt="Open the WebSite URL"
                    label="URL Link"
                    name="URL"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-up-right-from-square" />
                  </a>
                )}
              </div>
            </div>
            <div className="projects-article_text">
              <div>
                <div className="projects-article_title">
                  <h1>{project.name}</h1>
                  <p>{project.date}</p>
                </div>

                <p className="projects-article_desc">{project.description}</p>
              </div>
              <ul className="projects-article_tags">
                {project.tags.map((tag, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
