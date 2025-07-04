import React from 'react';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';

const AddTodo = () => {
    const [todoText, setTodoText] = useState("");
    return (
        <div>
            <TextField size="small" sx={{margin: "5px"}}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <Button >Add Todo</Button>
        </div>
    );
};

export default AddTodo;