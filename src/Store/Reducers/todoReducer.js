import visualTypes from "../../Constants/visualTypes";
import actionNames from "../../Constants/ActionNames/todoReducer";

const initialState = {
    todos: [],
    filter: visualTypes.SHOW_ALL,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionNames.ADD_TODO:
            const arr = [...state.todos]
            arr.push({
                text: action.payload.text,
                completed: false,
                index: arr.length
            })
            return {
                ...state,
                todos: arr
            }
        case actionNames.CHANGE_STATUS:
            return state;
        case actionNames.CHANGE_VISIBILITY:
            return state;
        default:
            return state;
    }
}

export default reducer;