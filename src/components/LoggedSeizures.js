import React from 'react';

function LoggedSeizures() {
  return (
    <div className="logged-seizures">
      <h3>Logged Seizures</h3>
      <div className="seizure-entry">
        <span className="seizure-label">Seizure #1</span>
        <span>05/27/25 at 7:04 PM</span>
      </div>
      <div className="seizure-entry">
        <span className="seizure-label">Seizure #2</span>
        <span>05/24/25 at 8:13 PM</span>
      </div>
      <div className="seizure-entry">
        <span className="seizure-label">Seizure #3</span>
        <span>05/18/25 at 10:13 PM</span>
      </div>
      <div className="logged-note">All times are in Eastern Standard Time (EST)</div>
    </div>
  );
}

export default LoggedSeizures;
