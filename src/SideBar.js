import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#home" onClick={onClose}>Home</a></li>
        <li><a href="#about" onClick={onClose}>About</a></li>
        <li><a href="#portfolio" onClick={onClose}>Portfolio</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
