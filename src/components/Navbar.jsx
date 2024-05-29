import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const underlineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 66.5) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      const sections = document.querySelectorAll("section");
      let currentSection = "home"; // Default to 'home'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSticky) {
      document.body.classList.add("stickyNav");
    } else {
      document.body.classList.remove("stickyNav");
    }
  }, [isSticky]);

  useEffect(() => {
    const updateUnderlinePosition = () => {
      const activeLink = document.querySelector(
        `.comp-navbar_menuCenter a[data-section="${activeSection}"]`
      );
      const underline = underlineRef.current;

      if (activeLink && underline) {
        const linkRect = activeLink.getBoundingClientRect();
        const menuCenterRect = document
          .querySelector(".comp-navbar_menuCenter")
          .getBoundingClientRect();
        underline.style.width = `${linkRect.width}px`;
        underline.style.transform = `translateX(${linkRect.left - menuCenterRect.left}px)`;
      }
    };

    updateUnderlinePosition();

    window.addEventListener("resize", updateUnderlinePosition);

    return () => {
      window.removeEventListener("resize", updateUnderlinePosition);
    };
  }, [activeSection]);

  const handleClick = (e, section) => {
    e.preventDefault();
    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="comp-navbar">
      <h1 className="comp-navbar_title">Flavien GAUJARD</h1>

      <nav className={`comp-navbar_menu${isSticky ? " sticky" : ""}`}>
        <div className="comp-navbar_menuCenter">
          <a
            href="#home"
            data-section="home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#projects"
            data-section="projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => handleClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#skills"
            data-section="skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={(e) => handleClick(e, "skills")}
          >
            Skills
          </a>
          <a
            href="#contact"
            data-section="contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => handleClick(e, "contact")}
          >
            Contact
          </a>
          <div className="comp-navbar_underline" ref={underlineRef} />
        </div>

        <div className="comp-navbar_menuRight">
          <a
            href="https://github.com/fgaujard?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github"
              style={{ marginRight: "0.5rem", scale: "1.5" }}
            />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
