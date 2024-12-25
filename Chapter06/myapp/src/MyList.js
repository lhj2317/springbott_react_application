import React, { useState } from 'react';

function MyList() {
    const [text, setText] = useState('');
    
    const inputChanged = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`You typed: ${text}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'  
                onChange={e => setText(e.target.value)} 
                value={text} />
            <input type='submit' value='Press me' />
        </form>
    );
}

export default MyList; 