import React, { useState } from 'react';
import './App.css';
import ProjectLens from './ProjectLens';

function App() {
  const [logoClicks, setLogoClicks] = useState(0);

  const projects = [
    {
      title: "D&D\nCharacter\nSheets",
      url: "https://jfeuerstein.github.io/dnd-character-sheets/",
      description: "character management for tabletop adventures"
    },
    {
      title: "Jessay\nWriter",
      url: "https://jfeuerstein.github.io/jessay-writer/",
      description: "distraction-free writing companion"
    },
    {
      title: "jo-sh\nTerminal",
      url: "https://jfeuerstein.github.io/jo-sh/",
      description: "terminal-style personal interface"
    }
  ];

  const handleLogoClick = () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    if (newCount === 5) {
      setLogoClicks(0);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <pre className="logo" onClick={handleLogoClick}>
{logoClicks >= 5 ? `
╔═══════════════════════╗
║  you found the lens!  ║
║   ⚙ josh-thetic ⚙    ║
╚═══════════════════════╝
` : `
┌─────────────┐
│ josh space  │
└─────────────┘
`}
        </pre>
        <p className="tagline">[ analog portfolio. digital projects. ]</p>
      </header>

      <main className="main-content">
        <section className="intro">
          <p className="intro-text">
            focus through the lens to view each project
          </p>
        </section>

        <section className="projects-grid">
          {projects.map((project, index) => (
            <ProjectLens
              key={index}
              title={project.title}
              url={project.url}
              description={project.description}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <pre className="footer-art">
┌────────────────────────────┐
│ built with the josh-thetic │
└────────────────────────────┘
        </pre>
      </footer>
    </div>
  );
}

export default App;
