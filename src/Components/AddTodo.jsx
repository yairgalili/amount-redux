import React from 'react';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Store/Actions/todoActions';

const AddTodo = () => {
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();
    const handleAddTodo = () => {
        if (todoText) {
            dispatch(addTodo(todoText));
            setTodoText("");
        }
    };
    return (
        <div>
            <TextField size="small" 
                sx={{margin: "5px"}}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAddTodo();
                    }
                }}
            />
            <Button
                onClick={handleAddTodo}
                variant="outlined"
                color="primary"
                sx={{margin: "5px"}}
            >
                Add Todo
            </Button>
        </div>
    );
};

export default AddTodo;