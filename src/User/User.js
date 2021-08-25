import React, { useState } from 'react';
import './User.css'

const User = (props) => {
    console.log(props.user);
    const {name, cell, picture, } = props.user;
    const [number, setNumber] = useState('');

    const addNumber = () => setNumber(cell);
    return (
        <div className="user">
            <img src={picture.large} alt="" />
            <h3>{name.first}</h3>
            <p>Cell: {number}</p>
            <button onClick = {addNumber}>See Number</button>
        </div>
    );
};

export default User;