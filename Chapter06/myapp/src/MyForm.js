import React, { useState } from 'react';

function MyForm() {
    const [user, setUser] = useState ({
        firstName : '',
        lastName : '',
        email : ''
    });

    const inputChanged = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }
    
    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName}  ${user.lastName}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> First Name</label> <input type="text" name="firstName" onChange={inputChanged} value={user.firstName} /><br/>
            <label> Last Name</label> <input type="text" name="lastName" onChange={inputChanged} value={user.lastName} /><br/>
            <label> Email</label> <input type="email" name="email" onChange={inputChanged} value={user.email} /><br/>
            <input type='submit' value='Press me' />
        </form>
    );
}

export default MyForm;