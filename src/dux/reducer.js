import axios from 'axios';

const initialState = {
  userData: {},
  novelData: {}
}

const GET_USER = 'GET_USER';
const GET_NOVELS = 'GET_NOVELS';

const POST_NOVEL = 'POST_NOVEL';

export default function reducer(state=initialState, action) {
  console.log(action.type)
  switch(action.type) {

    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {userData: action.payload.data[0]});

    case GET_NOVELS + '_FULFILLED':
      return Object.assign({}, state, {novelData: action.payload.data[0]});

    // case POST_NOVEL + '_FULFILLED':
    //   return Object.assign({});

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
    payload: axios.get('/novelData')
  }
}

// export function postNovel(a, b, c, d, e, f, g, h) {
//   return {
//     type: POST_NOVEL,
//     payload: axios.post('/novelData', (a, b, c, d, e, f, g, h))
//   }
// }