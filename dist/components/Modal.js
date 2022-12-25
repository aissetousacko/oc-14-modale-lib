import React from 'react';
import './Modal.css';

/**
 * Display the modal
 * @param {Boolean} open 
 * @param {Function} isOpen 
 * @param {String} message 
 * @returns {JSX.Element} Modal component
 */
const Modale = ({
  open,
  isOpen,
  message
}) => {
  if (open) {
    return /*#__PURE__*/React.createElement("div", {
      className: "modale"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modale__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "close",
      onClick: () => isOpen(!open)
    }), message));
  }
};
export default Modale;