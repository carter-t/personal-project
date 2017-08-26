import axios from 'axios';

const initialState = {
  user: {}
}

const GET_USER = 'GET_USER';

export default function data(state=initialState, action) {
  switch(action.type) {

    case GET_USER:
      return Object.assign({}, state, {actionType: action.payload.data[0]});

    default:
      return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/user')
  }
}