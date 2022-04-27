import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';


const initialValues = {
  name: "",
  email: "",
  role: ""
}


const teamMemberList = [
  {name: "tm1", email: "tm1@email.com", role: "engineer"},
  {name: "tm2", email: "tm2@email.com", role: "engineer"}
]


function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const [formValues, setFormValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Team List</div>
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />

        {teamMembers.map((member, idx) => {
          return <p key={idx}>Name: {member.name} Email: {member.email} Role: {member.role}</p>
        })}


      </header>
    </div>
  );
}

export default App;
