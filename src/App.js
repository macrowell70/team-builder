import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Team List</div>
      </header>
    </div>
  );
}

export default App;
