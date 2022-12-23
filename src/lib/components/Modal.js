import React from 'react';
import './Modal.css'

/**
 * Display the modal
 * @param {Boolean} open 
 * @param {Function} isOpen 
 * @param {String} message 
 * @returns {JSX.Element} Modal component
 */
const Modale = ({ open, isOpen, message }) => {
  if (open) {
    return (
      <div className="modale">
        <div className="modale__content">
          <div className="close" onClick={() => isOpen(!open)}></div>
          {message}
        </div>
      </div>
    )
  }
};

export default Modale;
