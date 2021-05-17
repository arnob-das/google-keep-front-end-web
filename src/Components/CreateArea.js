import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { UserContext } from "../App";

export default function App() {
    const [loggedInUser, setLoggedInUser, number, setNumber] = useContext(UserContext);
    const [isExpanded, setExpanded] = useState(false);

    const handleSum = () => {
        setNumber(number + 1)
    }

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        handleSum()
        data.email = loggedInUser.email
        data.role = "user"
        fetch('http://localhost:5000/addNotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })

    };

    const expand = () => {
        setExpanded(true);
    }

    return (

        <div>
            <form className="create-note" onSubmit={handleSubmit(onSubmit)}>
                {isExpanded && (
                    <input
                        name="title"
                        defaultValue="Title"
                        ref={register({ required: true })}
                    />
                )}

                <input
                    name="takeANote"
                    onClick={expand}
                    defaultValue="Take A Note ..."
                    rows={isExpanded ? 3 : 1}
                    ref={register({ required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}

                <Zoom type="submit" in={isExpanded}>
                    <Fab>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}