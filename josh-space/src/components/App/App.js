import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectTile from '../ProjectTile';

function App() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [activeTile, setActiveTile] = useState(null);
  const [solvedTiles, setSolvedTiles] = useState([]);
  const [allSolved, setAllSolved] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [currentTileIndex, setCurrentTileIndex] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  const projects = [
    {
      title: "HxHxDxD\nCharacter\nSheets",
      url: "https://jfeuerstein.github.io/dnd-character-sheets/",
      description: "character management",
      password: "d20"
    },
    {
      title: "Jessay\nWriter",
      url: "https://jfeuerstein.github.io/jessay-writer/",
      description: "distraction-free writing companion",
      password: "focus"
    },
    {
      title: "jo-sh\nTerminal",
      url: "https://jfeuerstein.github.io/jo-sh/",
      description: "a to do list for a specific kind of person",
      password: "bash"
    }
  ];

  useEffect(() => {
    if (solvedTiles.length === projects.length && projects.length > 0) {
      setAllSolved(true);
    }
  }, [solvedTiles, projects.length]);

  const handleTileClick = (index) => {
    if (solvedTiles.includes(index)) {
      // If already solved, open the project
      window.open(projects[index].url, '_blank', 'noopener,noreferrer');
      return;
    }

    if (activeTile === index) {
      // Second click on same tile - show password popup
      setCurrentTileIndex(index);
      setShowPasswordPopup(true);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      // First click - activate tile
      setActiveTile(index);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === projects[currentTileIndex].password) {
      // Correct password - solve the tile
      setSolvedTiles([...solvedTiles, currentTileIndex]);
      setActiveTile(null);
      setShowPasswordPopup(false);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      // Wrong password - show error
      setPasswordError(true);
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordPopup(false);
    setPasswordInput('');
    setPasswordError(false);
    setActiveTile(null);
  };

  const handleLogoClick = () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    if (newCount === 5) {
      setLogoClicks(0);
    }
  };

  return (
    <div className={`App ${allSolved ? 'access granted' : ''}`}>
      <header className="header">
        <pre className="logo" onClick={handleLogoClick}>
{logoClicks >= 5 ? `
╔═══════════════════════════╗
║  stop clicking            ║
║     ⚙ josh-thetic ⚙       ║
╚═══════════════════════════╝
` : `
┌─────────────┐ 
│ josh space  │ 
└─────────────┘ 
`}
        </pre>
        <pre className="tagline">
        *   '*                                      <br/>
        *                           <br/>
        *                  <br/>
        *<br/>
        *                <br/>
        *   <br/>    

 </pre>
      </header>

      <main className="main-content">
        <section className="intro">
          <p className="intro-text">
            {allSolved
              ? '✓ all unlocked ✓'
              : 'welcome to my website'}
          </p>
        </section>

        <section className="projects-grid">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              index={index}
              title={project.title}
              url={project.url}
              description={project.description}
              isActive={activeTile === index}
              isSolved={solvedTiles.includes(index)}
              onClick={handleTileClick}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <pre className="footer-art">
┌────────────────────────────┐<br/>
│ built with the josh-thetic │<br/>
└────────────────────────────┘
        </pre>
      </footer>

      {showPasswordPopup && (
        <div className="password-overlay">
          <div className="password-popup">
            <pre className="password-popup-title">
┌────────────────────┐<br/>
│ enter password     │<br/>
└────────────────────┘
            </pre>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="text"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="password-input"
                autoFocus
                placeholder="password"
              />
              {passwordError && (
                <div className="password-error">[ incorrect password ]</div>
              )}
              <div className="password-buttons">
                <button type="submit" className="password-btn">[ unlock ]</button>
                <button type="button" onClick={handlePasswordCancel} className="password-btn">[ cancel ]</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
