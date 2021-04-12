import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./actionType";
export const addToDo = (toDo) => {
  return {
    type: ADD_TODO,
    payload: toDo,
  };
};
export const toggelToDo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};
export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export default addToDo;
