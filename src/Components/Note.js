import React, { useContext } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import { UserContext } from '../App';

const Note = ({ note }) => {
  const [loggedInUser, setLoggedInUser, number, setNumber] = useContext(UserContext);

  const handleSum = () => {
    setNumber(number + 1)
  }

  const handleDelete = (id) => {
    handleSum();
    fetch(`http://localhost:5000/delete/${note._id}`, {
      method: 'DELETE',
    })
      .then(res => res.json)
      .then(result => {
        // console.log('deleted successfully');
      })
  }

  return (
    <div className="note col-md-4 col-lg-3">
      <h1>{note.title}</h1>
      <p>{note.takeANote}</p>
      <button onClick={() => handleDelete(`${note._id}`)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;