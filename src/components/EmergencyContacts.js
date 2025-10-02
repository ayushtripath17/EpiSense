import React from 'react';
import contactImage from '../images/contactuser.png';

function EmergencyContacts() {
  return (
    <div className="emergency-contacts">
      <h3>Emergency Contacts</h3>
      <div className="contact-cards">
        <div className="contact-card">
          <img src={contactImage} className="contact-name-image" alt="Contact" />
          <div className="contact-card-name">Ayush Tripathi</div>
          <div className="contact-card-number">(732) 829-7208</div>
        </div>
        <div className="contact-card">
          <img src={contactImage} className="contact-name-image" alt="Contact" />
          <div className="contact-card-name">Sai Minnal</div>
          <div className="contact-card-number">(908) 209-6916</div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyContacts;
