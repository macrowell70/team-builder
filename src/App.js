import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  

  return (
    <div className="App">
      <header className="App-header">
        <div>Team List</div>
        <Form />
      </header>
    </div>
  );
}

export default App;
