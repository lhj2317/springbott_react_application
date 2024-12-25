import React, { useState } from 'react';

function MyForm1() {
    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [email, setEmail] = useState (''); 
 
    const handleSubmit = (event) => {
        alert(`Hello ${firstName}  ${lastName}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> First Name</label> 
            <input  
                onChange= {e => setFirstName(e.target.value)} 
                value={firstName} /><br/>
            <label> Last Name</label> 
            <input  
                onChange= {e => setLastName(e.target.value)} 
                value={lastName} /><br/>
            <label> Email</label> 
           <input  
                onChange= {e => setEmail(e.target.value)} 
                value={email} /><br/>
            <input type='submit' value='Press me' />
        </form>
    );
}

export default MyForm1;