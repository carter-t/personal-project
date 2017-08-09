const initialState = {
  actionType: ''
}

const ACTION_TYPE = 'ACTION_TYPE';

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case ACTION_TYPE:
      return Object.assign({}, state, {actionType: action.payload});

    default:
      return state;
  }
}

export function updateActionType(value) {
  return {
    type: ACTION_TYPE,
    payload: value
  }
}