import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions/types";

const initialState = {
  items: [],
  onAdd: null,
  onDelete: null,
  onEditSubmit: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        items: action.payload.data
      };
    case ADD_USER:
      return Object.assign({}, state, {
        onAdd: action.payload,
        items:[...state.items, action.payload]
      })
    case DELETE_USER:
      const itemsCopy = [...state.items];
      return Object.assign({}, state, {
        items: itemsCopy.filter(user => user.id !== action.payload) 
      });      
    case UPDATE_USER:
      return Object.assign({}, state, {
        items: state.items.map(user => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        })
      });      
    default:
      return state;
  }
}
