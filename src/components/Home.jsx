import React, { useState } from "react";
import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import pfp from "../assets/ghibli.png";

const DEMOS = [
  {
    title: "Restaurant Website",
    screenshot: demo2,
    desc: "A modern, AI-powered restaurant website featuring an intuitive menu, online reservations, and a seamless user experience. Built with the latest web technologies to help restaurants engage customers and streamline operations.",
  },
  {
    title: "FadezbyJazz",
    screenshot: demo1,
    desc: "A stylish and responsive barber shop website for FadezbyJazz, designed to showcase services, enable easy appointment bookings, and highlight the brand’s unique personality. Optimized for both desktop and mobile users.",
  },
];

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const calendarUrl =
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=Appointment+with+Developer&details=Let%27s+connect!";

  return (
    <div>
      <div className="nav-bar">
        <div className="nav-content">
          <div className="nav-logo">VS</div>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Improved Home Section */}
      <header className="hero improved-hero" id="home">
        <div className="hero-content">
          <div
            className="hero-left interactive-pfp-wrapper"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={pfp}
              alt="Profile"
              className={`profile-pic improved-pfp interactive-pfp${
                hovered ? " hovered" : ""
              }`}
            />
            {hovered && <div className="pfp-tooltip">Hi, I'm V S! 👋</div>}
          </div>
          <div className="hero-right">
            <h1>
              Hi, I'm <span className="hero-name">V S</span>
              <span className="hero-wave" role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <h2 className="hero-title">
              Full Stack Developer &amp; Tech Enthusiast
            </h2>
            <p className="hero-desc">
              I build modern, scalable web and mobile applications with a focus
              on user experience and performance.
              <br />
              Let's create something amazing together!
            </p>
            <div className="hero-buttons">
              <a href="#projects">
                <button className="hero-btn hero-btn-main">
                  View Projects
                </button>
              </a>
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                <button className="hero-btn">Book Appointment</button>
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.62v4.69z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section id="about" className="about-section">
        <div className="about-header">
          <span role="img" aria-label="waving hand" className="about-emoji">
            👋
          </span>
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-summary">
            <p>
              Hi! I'm a passionate developer with a love for building modern,
              user-friendly web and mobile applications. My focus is on creating
              seamless digital experiences and efficient back-end systems.
              <br />
              <br />I enjoy collaborating with others, learning new
              technologies, and solving real-world problems through code. Let's
              build something amazing together!
            </p>
          </div>
          <div className="about-skills">
            <h3>Skills</h3>
            <ul className="skills">
              <li>Node JS</li>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>React-Native</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <p>Check out some of my work below.</p>
        <div className="project-list">
          {DEMOS.map((demo, idx) => (
            <div className="project-item" key={idx}>
              <h3>{demo.title}</h3>
              <p>{demo.desc}</p>
              <div className="modern-laptop-frame">
                <div className="modern-laptop-label">Demo Preview</div>
                <div className="modern-laptop-bezel">
                  <div className="modern-laptop-camera-dot"></div>
                  <div className="modern-laptop-screenshot-wrapper">
                    <img
                      src={demo.screenshot}
                      alt={demo.title + " Screenshot"}
                      className="modern-laptop-screenshot"
                      draggable={false}
                    />
                  </div>
                </div>
                {/* <div className="modern-laptop-base"></div> */}
              </div>
            </div>
          ))}
        </div>
        <p>More projects coming soon!</p>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Interested in working together or have a question? <br />
          Reach out and I'll get back to you soon!
        </p>
        <div className="contact-details">
          <div className="contact-info">
            <div>
              <strong>Email:</strong>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vsbharaniram5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                vsbharaniram5@gmail.com
              </a>
            </div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/bharani-ram-venkatesan-sudhaa-43232728a/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                My Linkedin
              </a>
            </div>
            <div>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Bram-cat"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                My GitHub
              </a>
            </div>
          </div>
          {/* Removed the contact form input fields */}
        </div>
      </section>
    </div>
  );
};

export default Home;
