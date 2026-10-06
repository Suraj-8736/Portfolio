import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Code2, Database, Globe, BrainCircuit, Terminal, Menu, X,
  ExternalLink, ChevronDown
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Real-Time Object Detection",
    description:
      "A browser-based object detection application using YOLO and Flask. Detects objects from a live camera stream and presents results through a responsive web interface.",
    tags: ["Python", "YOLO", "OpenCV", "Flask"],
    github: "https://github.com/Suraj-8736/real-time-object-detection",
    featured: true
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis interface built with React and Tailwind CSS, designed to help candidates understand and improve their resumes.",
    tags: ["React", "Tailwind", "Puter.js", "AI"],
    github: "#"
  },
  {
    title: "Online Grocery Shop",
    description:
      "A Django-based grocery shopping platform with product browsing, templates, database-backed content and a clean MVT architecture.",
    tags: ["Python", "Django", "SQLite", "HTML/CSS"],
    github: "#"
  },
  {
    title: "MERN Food Delivery",
    description:
      "A full-stack food delivery project covering restaurant-style browsing, food listings, cart workflows and a modern frontend experience.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "#"
  }
];

const skills = [
  ["C++", "DSA, STL, problem solving", Code2],
  ["Python", "Flask, Django, automation", Terminal],
  ["JavaScript", "Modern ES6+, frontend logic", Code2],
  ["React", "Components, routing, UI", Globe],
  ["Backend", "Django, Flask, Node.js", Database],
  ["AI / ML", "YOLO, computer vision", BrainCircuit]
];

function App() {
  const [open, setOpen] = React.useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav">
        <button className="logo" onClick={() => scrollTo("home")}>
          S<span>M</span>
        </button>

        <nav className={open ? "navlinks open" : "navlinks"}>
          {["about", "skills", "projects", "education", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
        </nav>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>
              Hi, I'm <em>Suraj</em>.
              <br />
              I build things
              <br />
              <span className="outline">for the web.</span>
            </h1>
            <p className="hero-text">
              A Computer Science student and aspiring Software Engineer focused
              on C++, DSA, full-stack development and practical AI projects.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => scrollTo("projects")}>
                View my work <ArrowUpRight size={18} />
              </button>
              <button className="secondary" onClick={() => scrollTo("contact")}>
                Let's connect
              </button>
            </div>
            <div className="socials">
              <a href="https://github.com/Suraj-8736" target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
              <a href="mailto:surajmishra873681@gmail.com"><Mail size={19}/> Email</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="grid-circle" />
            <div className="code-card">
              <div className="dots"><i/><i/><i/></div>
              <pre><code><span className="purple">class</span> <span className="blue">Developer</span> {"{"}{"\n"}  <span className="purple">string</span> name = <span className="green">"Suraj"</span>;{"\n"}  <span className="purple">string</span> focus = <span className="green">"C++"</span>;{"\n"}  <span className="purple">bool</span> build = <span className="orange">true</span>;{"\n"}{"\n"}  <span className="blue">void</span> create() {"{"}{"\n"}    learn();{"\n"}    solve();{"\n"}    ship();{"\n"}  {"}"}{"\n"}{"}"}</code></pre>
            </div>
            <div className="float-badge badge-one"><Code2 size={18}/> C++</div>
            <div className="float-badge badge-two"><BrainCircuit size={18}/> AI / ML</div>
            <div className="scroll">SCROLL <ChevronDown size={16}/></div>
          </div>
        </section>

        <section id="about" className="section split">
          <div className="section-label">01 — ABOUT</div>
          <div>
            <h2>Turning curiosity into <span>working software.</span></h2>
            <p className="lead">
              I'm a B.Tech Computer Science student who enjoys understanding
              how software works from the fundamentals up. My current focus is
              strengthening C++ and DSA while building real-world web and AI
              applications.
            </p>
            <p>
              I like taking an idea from a rough concept to a usable product:
              designing the interface, writing the backend, connecting the
              pieces and finally deploying it.
            </p>
            <div className="mini-stats">
              <div><strong>04+</strong><small>Projects</small></div>
              <div><strong>C++</strong><small>Core Focus</small></div>
              <div><strong>DSA</strong><small>Daily Practice</small></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 — SKILLS</div>
          <div>
            <h2>Tools I use to <span>build.</span></h2>
            <div className="skills-grid">
              {skills.map(([name, desc, Icon]) => (
                <div className="skill-card" key={name}>
                  <div className="skill-icon"><Icon size={22}/></div>
                  <div><h3>{name}</h3><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <div className="tech-list">
              <span>HTML5</span><span>CSS3</span><span>JavaScript</span>
              <span>Git</span><span>GitHub</span><span>SQL</span>
              <span>REST APIs</span><span>VS Code</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">03 — PROJECTS</div>
          <div>
            <div className="section-heading-row">
              <h2>Selected <span>work.</span></h2>
              <a href="https://github.com/Suraj-8736" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={17}/></a>
            </div>
            <div className="projects">
              {projects.map((p, i) => (
                <article className={p.featured ? "project featured" : "project"} key={p.title}>
                  <div className="project-top">
                    <span className="project-number">0{i + 1}</span>
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}>
                      <ExternalLink size={18}/>
                    </a>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section split">
          <div className="section-label">04 — EDUCATION</div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"/>
              <div>
                <span className="date">B.TECH • COMPUTER SCIENCE & ENGINEERING</span>
                <h3>AKTU Affiliated College</h3>
                <p>Building a strong foundation in computer science, software engineering, databases, networks, algorithms and web technologies.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"/>
              <div>
                <span className="date">CURRENT FOCUS</span>
                <h3>C++ + DSA + Software Development</h3>
                <p>Solving coding problems, learning STL and strengthening problem-solving skills alongside full-stack and AI projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner">
            <div className="eyebrow"><span /> HAVE A PROJECT IN MIND?</div>
            <h2>Let's build something<br/><em>great together.</em></h2>
            <p>I'm open to internships, entry-level software opportunities and interesting projects.</p>
            <a className="primary big" href="mailto:surajmishra873681@gmail.com">
              Say hello <Mail size={19}/>
            </a>
            <div className="contact-meta">
              <span><MapPin size={17}/> India</span>
              <span><Mail size={17}/> surajmishra873681@gmail.com</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Suraj Mishra</span>
        <span>Designed & built with React</span>
        <button onClick={() => scrollTo("home")}>Back to top ↑</button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
