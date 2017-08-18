import axios from 'axios';

const initialState = {
  getData: {},
}

const GET_DATA = 'GET_DATA';

export default function reducer(state=initialState, action) {
  console.log(action.type)
  switch(action.type) {

    case GET_DATA + "_FULFILLED":
      return Object.assign({}, state, {getData: action.payload.data});

    default:
      return state;
  }
}

export function getData(value) {
  return {
    type: GET_DATA,
    payload: axios.get("/userData")
  }
}