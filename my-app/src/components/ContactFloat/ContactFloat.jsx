import React, { useState } from 'react';
import './ContactFloat.css';

const ContactFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="contact-float">
      <button 
        className="contact-button"
        onClick={toggleOpen}
        aria-label="Contact"
      >
        <i className="icon-phone"></i>
      </button>
      
      {isOpen && (
        <div className="contact-popup">
          <h3>Liên hệ với chúng tôi</h3>
          <div className="contact-info">
            <p>
              <i className="icon-phone"></i>
              <span>Hotline: 1900.5226</span>
            </p>
            <p>
              <i className="icon-phone"></i>
              <span>CSKH: 0942.26.26.26</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFloat;