import axios from 'axios';

const initialState = {
  user: {}
}

const GET_USER = 'GET_USER';
const POST_CUBE = 'POST_CUBE';

export default function data(state=initialState, action) {
  switch(action.type) {

    case GET_USER:
      return Object.assign({}, state, {user: action.payload.data[0]});

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

export function postCube(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  let cube = {
    "tag": a,
    "name": b,
    "fronttype": c,
    "frontfile": d,
    "lefttype": e,
    "leftfile": f,
    "righttype": g,
    "rightfile": h,
    "backtype": i,
    "backfile": j,
    "toptype": k,
    "topfile": l,
    "bottomtype": m,
    "bottomfile": n
  };
  return {
    action: POST_CUBE,
    payload: axios.post('/api/cube', cube)
  }
}