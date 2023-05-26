import React, { useState } from 'react';
import './HoverableBox.css';

const HoverableBox = ({ children, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="box-image">
        <img src={imageUrl} alt="Box Image" />
      </div>
      <div className={`box-content ${isHovered ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default HoverableBox;
