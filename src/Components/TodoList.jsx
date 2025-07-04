import { List } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../Store/Actions/todoActions';
import { ListItem, Checkbox } from '@mui/material';


const TodoList = ({todos = [{text: "aaa", completed: true}]}) => {
    const dispatch = useDispatch();
    return (
        <List>
            {todos.map(({text, completed, index}) => (
                <ListItem key={index}>
                {text}
                <Checkbox
                key = {index + "checkbox"}
                checked={completed}
                onChange={() => dispatch(changeStatus(index))}
                />
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;