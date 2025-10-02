import React from 'react';
import Logo from '../images/logo.png';

function Sidebar({ seizureDemo, setSeizureDemo }) {
  const handleToggle = () => {
    setSeizureDemo(prev => !prev);
  };

  return (
    <div className="sidebar">
      <img src={Logo} className="logo-image" alt="EpiSense" />
      <button
        onClick={handleToggle}
        className={`toggle-button ${seizureDemo ? 'on' : 'off'}`}
      >
        {seizureDemo ? 'Seizure Demo ON' : 'Seizure Demo OFF'}
      </button>
    </div>
  );
}

export default Sidebar;
