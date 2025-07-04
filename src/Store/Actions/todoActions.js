import actionNames from "../../Constants/ActionNames/todoReducer";

const addTodo = (text) => {
  return {
    type: actionNames.ADD_TODO,
    payload: {text},
  };
};

const changeStatus = (index) => {
  return {
    type: actionNames.CHANGE_STATUS,
    payload: {index},
  };
};

const changeVisibility = (value) => {
  return {
    type: actionNames.CHANGE_VISIBILITY,
    payload: {value},
  };
};

export { addTodo, changeStatus, changeVisibility };