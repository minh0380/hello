import React from 'react';
import List from './study';

const HandlerFunc = () => {
    const handleChange = event => {
        console.log(event.target.value);
    }

    return(
        <div>
            <h1>My Hacker Stories</h1>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
            <hr/>
            <List/>
        </div>
    )
}

export default HandlerFunc;