import axios from 'axios';

const initialState = {
  user: false,
  cubes: false,
}

const GET_USER = 'GET_USER';

const GET_CUBES = 'GET_CUBES';
const POST_CUBE = 'POST_CUBE';

export default function data(state=initialState, action) {
  switch(action.type) {

    // GET_USER
    case GET_USER + '_PENDING':
      console.log(GET_USER + '_PENDING');
      return state;

    case GET_USER + '_FULFILLED':
      console.log(GET_USER + '_FULFILLED', action.payload.data[0]);
      return Object.assign({}, state, {user: action.payload.data[0]});

    // GET_CUBES
    case GET_CUBES + '_PENDING':
      return state;

    case GET_CUBES + '_FULFILLED':
      console.log(GET_CUBES + '_FULFILLED', action.payload.data);
      return Object.assign({}, state, {cubes: action.payload.data});

    default:
      return state;
  }
}

export function getUser() {
  console.log('Getting User');
  return {
    type: GET_USER,
    payload: axios.get('/api/user')
  }
}

export function getCubes() {
  return {
    type: GET_CUBES,
    payload: axios.get('/api/getcubes')
  }
}

export function postCube(tag, name, front, back, left, right, top, bottom) {
  let cube = {
    "tag": tag,
    "name": name,
    "front": front,
    "back": back,
    "left": left,
    "right": right,
    "top": top,
    "bottom": bottom
  };
  return {
    action: POST_CUBE,
    payload: axios.post('/api/cube', cube)
  }
}