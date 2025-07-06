import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeVisibility } from '../Store/Actions/todoActions';
import visualTypesConstants from '../Constants/visualTypes';
import { Button } from '@mui/material';

const VisualTypes = () => {
    const [choose, setChoose] = useState(visualTypesConstants.SHOW_ALL);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        setChoose(e.target.name);
        dispatch(changeVisibility(e.target.name));
    }

    return (
        <div style={{margin: "5px"}}>
            <Button variant={choose === visualTypesConstants.SHOW_ALL ? "contained" : "outlined"} onClick={handleClick}
                name={visualTypesConstants.SHOW_ALL}>All</Button>
            <Button variant={choose === visualTypesConstants.SHOW_COMPLETED ? "contained" : "outlined"} onClick={handleClick}
                name={visualTypesConstants.SHOW_COMPLETED}>Completed</Button>
            <Button variant={choose === visualTypesConstants.SHOW_ACTIVE ? "contained" : "outlined"} onClick={handleClick}
                name={visualTypesConstants.SHOW_ACTIVE}>Active</Button>
        </div>
    )
}
export default VisualTypes;