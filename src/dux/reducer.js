import axios from 'axios';

const initialState = {
  userData: {},
  novelData: {}
}

const GET_USER = 'GET_USER';
const GET_NOVELS = 'GET_NOVELS';

export default function reducer(state=initialState, action) {
  console.log(action.type)
  switch(action.type) {

    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {userData: action.payload.data[0]});

    case GET_NOVELS + '_FULFILLED':
      return Object.assign({}, state, {novelData: action.payload});

    default:
      return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/userData')
  }
}

export function getNovels() {
  return {
    type: GET_NOVELS,
    payload: axios.get('/novels')
  }
}