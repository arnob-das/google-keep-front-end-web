import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import CreateArea from './CreateArea'
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const Keep = () => {
    const [loggedInUser, setLoggedInUser, number, setNumber] = useContext(UserContext);

    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/myNotes?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [number])
    return (
        <div>
            <Header></Header>
            <CreateArea></CreateArea>
            <div className="row d-flex align-items-center justify-content-center">
                {notes.map(note => <Note key={note._id} note={note}></Note>)}
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Keep;