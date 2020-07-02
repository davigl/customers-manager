import { ADD_CLIENT } from '../actions/client';

const INITIAL_VALUE = { values: [] };

const ClientReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, values: [...state.values, ...action.value] };
    default:
      return state;
  }
};

export default ClientReducer;
