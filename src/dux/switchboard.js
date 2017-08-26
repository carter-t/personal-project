const initialState = {
  toggleClass: ''
}

const TOGGLE_CLASS = 'TOGGLE_CLASS';

export default function switchboard(state=initialState, action) {
  switch(action.type) {

    case TOGGLE_CLASS:
      return Object.assign({}, state, {toggleClass: action.payload});

    default:
      return state;
  }
}

export function toggleClass(value) {
  return {
    type: TOGGLE_CLASS,
    payload: value
  }
}