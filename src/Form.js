import React from 'react';

const Form = () => {
    return (
        <form>
            <label>Name
                <input type="text" />
            </label>
            <label>Email
                <input type="email" />
            </label>
            <label>Role
                <select>
                    <option value="">--Select a Role--</option>
                    <option value="backend">Backend Engineer</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </select>
            </label>
        </form>
    )
};

export default Form