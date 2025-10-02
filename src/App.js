import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import RealTimeData from './components/RealTimeData';
import LoggedSeizures from './components/LoggedSeizures';
import EmergencyContacts from './components/EmergencyContacts';

function App() {

  const [seizureDemo, setSeizureDemo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (seizureDemo) {
      // Show modal after 6 seconds
      timer = setTimeout(() => {
        setShowModal(true);
      }, 6000);
    } else {
      // Reset modal if demo is turned off
      setShowModal(false);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [seizureDemo]);

  return (
    <div className="app-layout">
      <Sidebar seizureDemo={seizureDemo} setSeizureDemo={setSeizureDemo} />
      <div className="main-content">
        <RealTimeData seizureDemo={seizureDemo} />
        <div className="bottom-section">
          <LoggedSeizures />
          <EmergencyContacts />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>⚠️ Seizure Detected</h2>
            <p>Emergency response initiated.</p>
            <button className="x" onClick={() => setShowModal(false)}>Dismiss</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
