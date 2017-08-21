import axios from 'axios';

const initialState = {
  userData: {},
  novelOne: {},
  novelTwo: {},
  novelThree: {},
  novelFour: {}
}

const GET_USER = 'GET_USER';

const GET_NOVEL_ONE = 'GET_NOVEL_ONE';
const GET_NOVEL_TWO = 'GET_NOVEL_TWO';
const GET_NOVEL_THREE = 'GET_NOVEL_THREE';

const SET_STORY = 'SET_STORY';

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {userData: action.payload.data[0]});

    case GET_NOVEL_ONE + '_FULFILLED':
      return Object.assign({}, state, {novelOne: action.payload.data[0]});

    
    case GET_NOVEL_TWO + '_FULFILLED':
      return Object.assign({}, state, {novelTwo: action.payload.data[0]});

  
    case GET_NOVEL_THREE + '_FULFILLED':
      return Object.assign({}, state, {novelThree: action.payload.data[0]});

    case SET_STORY + '_FULFILLED':
      return Object.assign({}, state, {novelFour: action.payload});

    default:
      return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/userData')
  }
}

export function getNovelOne() {
  return {
    type: GET_NOVEL_ONE,
    payload: axios.get('/api/novelOne')
  }
}

export function getNovelTwo() {
  return {
    type: GET_NOVEL_TWO,
    payload: axios.get('/api/novelTwo')
  }
}

export function getNovelThree() {
  return {
    type: GET_NOVEL_THREE,
    payload: axios.get('/api/novelThree')
  }
}

export function setStory(a, b, c, d, e, f, g, h, i) {
  let formData = {
    "id": a,
    "title": b,
    "volume": c,
    "genre": d,
    "worlds": e,
    "factions": f,
    "places": g,
    "people": h,
    "synopsis": i
  }
  return {
    type: SET_STORY,
    payload: axios.post('/api/formData', formData)
  }
}

export function setWorld(a, b, c, d, e, f, g, h, i) {
  let formData = {
    "id": a,
    "name": b,
    "era": c,
    "uni": d,
    "land": e,
    "practice": f,
    "inhab": g,
    "desc": h,
    "lore": i
  }
  return {
    type: SET_STORY,
    payload: axios.post('/api/formData', formData)
  }
}

export function setFaction(a, b, c, d, e, f, g, h, i) {
  let formData = {
    "id": a,
    "name": b,
    "align": c,
    "mantra": d,
    "type": e,
    "powers": f,
    "hold": g,
    "desc": h,
    "origin": i
  }
  return {
    type: SET_STORY,
    payload: axios.post('/api/formData', formData)
  }
}

export function setPlace(a, b, c, d, e, f, g, h, i) {
  let formData = {
    "id": a,
    "name": b,
    "era": c,
    "location": d,
    "type": e,
    "land": f,
    "context": g,
    "desc": h,
    "origin": i
  }
  return {
    type: SET_STORY,
    payload: axios.post('/api/formData', formData)
  }
}

export function setPerson(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
  let formData = {
    "id": a,
    "firstname": b,
    "lastname": c,
    "title": d,
    "age": e,
    "gender": f,
    "race": g,
    "align": h,
    "mantra": i,
    "temp": j,
    "role": k,
    "values": l,
    "ability": m,
    "desc": n,
    "story": o
  }
  return {
    type: SET_STORY,
    payload: axios.post('/api/formData', formData)
  }
}