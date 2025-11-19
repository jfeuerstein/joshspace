import React, { useState } from 'react';
import './ProjectLens.css';

function ProjectLens({ title, url, description }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 3) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setClickCount(0);
    }
  };

  return (
    <div className="lens-container" onClick={handleClick}>
      <div className="lens">
        <div className="lens-outer-ring"></div>
        <div className="lens-middle-ring"></div>
        <div className="lens-inner-ring"></div>
        <div className="lens-glass">
          <div className="lens-content">
            <pre className="lens-title">{title}</pre>
            <p className="lens-description">{description}</p>
            <span className="lens-hint">
              {clickCount === 0 && '[ click to focus ]'}
              {clickCount === 1 && '[ focusing... ]'}
              {clickCount === 2 && '[ click to view ]'}
            </span>
          </div>
          <div className="lens-glare"></div>
        </div>
        <div className="lens-markings">
          <span className="marking top">f/2.8</span>
          <span className="marking bottom">58mm</span>
        </div>
      </div>
      <div className="lens-label">{title.toLowerCase()}</div>
    </div>
  );
}

export default ProjectLens;
