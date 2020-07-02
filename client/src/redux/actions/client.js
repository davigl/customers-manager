export const ADD_CLIENT = 'ADD_CLIENT';

export const addClient = (dispatch, value) => {
  dispatch({ type: ADD_CLIENT, value });
};
