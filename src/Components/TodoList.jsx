import { List } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../Store/Actions/todoActions';
import { ListItem, Checkbox } from '@mui/material';


const TodoList = ({todos}) => {
    const dispatch = useDispatch();
    return (
        <List>
            {todos.map(({text, completed}, index) => (
                <ListItem key={index} sx={{fontFamily: "Arial"}}>
                <Checkbox
                key = {index + "checkbox"}
                name = {index}
                checked={completed}
                onChange={() => dispatch(changeStatus(index))}
                />
                {text}
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;