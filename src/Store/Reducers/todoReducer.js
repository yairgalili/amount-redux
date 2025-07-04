import visualTypes from "../../Constants/visualTypes";
import actionNames from "../../Constants/ActionNames/todoReducer";

const initialState = {
    todo: [],
    filter: visualTypes.SHOW_ALL,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionNames.ADD_TODO:
            return state;
        case actionNames.CHANGE_STATUS:
            return state;
        case actionNames.CHANGE_VISIBILITY:
            return state;
        default:
            return state;
    }
}

export default reducer;