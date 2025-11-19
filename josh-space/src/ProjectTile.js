import React from 'react';
import './ProjectTile.css';

function ProjectTile({ title, url, description, isActive, isSolved, onClick, index }) {

  const handleClick = () => {
    onClick(index);
  };

  return (
    <div
      className={`tile-container ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}`}
      onClick={handleClick}
      style={{
        '--tile-index': index
      }}
    >
      <div className="tile">
        <div className="tile-corners">
        </div>

        <div className="tile-content">
          <pre className="tile-title">{title}</pre>
          <p className="tile-description">{description}</p>
          <span className="tile-hint">
            {!isSolved && !isActive && '[ click to align ]'}
            {isActive && !isSolved && '[ aligning... ]'}
            {isSolved && '[ solved ]'}
          </span>
        </div>

        {isSolved && (
          <div className="solve-indicator">
            <span className="checkmark">✓</span>
          </div>
        )}

        <div className="tile-edges">
          <span className="edge top"></span>
          <span className="edge right"></span>
          <span className="edge bottom"></span>
          <span className="edge left"></span>
        </div>
      </div>

      <div className="tile-label">
        <span>{title.toLowerCase().replace(/\n/g, ' ')}</span>
      </div>
    </div>
  );
}

export default ProjectTile;
