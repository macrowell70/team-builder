import React from 'react';

const Form = (props) => {
   const { values, update, submit } = props

   const onChange = (evt) => {
       const name = evt.target.name;
       const value = evt.target.value;
       update(name, value)
   };

   const onSubmit = (evt) => {
       evt.preventDefault();
       submit()
   };

    return (
        <form className="form conatiner" onSubmit={onSubmit}>
            <label>Name
                <input 
                type="text"
                name="name"
                placeholder="Enter Team Member Name"
                value={values.name}
                onChange={onChange} 
                maxLength="30"
                />
            </label>
            <label>Email
                <input 
                type="email"
                name="email"
                placeholder="Enter Team Member Email"
                value={values.email}
                onChange={onChange} />
            </label>
            <label>Role
                <select name="role" value={values.role} onChange={onChange}>
                    <option value="">--Select a Role--</option>
                    <option value="backend">Backend Engineer</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
};

export default Form