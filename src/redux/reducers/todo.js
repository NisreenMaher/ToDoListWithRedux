import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actionType";
let idToDo = 0;
const initialState = [];
const toDo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { toDo: action.payload, id: idToDo++, done: false }];
    case COMPLETE_TODO:
      return state.map((e, index) => {
        if (e.id === action.payload) return { ...e, done: !e.done };
        return e;
      });
    case DELETE_TODO:
      return state.filter((e) => e.id !== action.payload);

    default:
      return state;
  }
};
export default toDo;
