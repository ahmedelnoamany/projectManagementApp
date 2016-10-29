// ACTION TYPES
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_OUT_SUCCESS = 'SING_OUT_SUCCESS'
// ACTION CREATORS
export function signInSuccess(loggedIn, userid, token) {
  return {
    type: SIGN_IN_SUCCESS,
    loggedIn,
    userid,
    token
  }
}

export function signOutSuccess(loggedIn) {
  return {
    type: SIGN_OUT_SUCCESS,
    loggedIn
  }
}


// INITIAL STORE STATE
const defaultState = {
  loggedIn: false,
  userid: 'userid',
  token: 'token'
}

// REDUCERS
export default function userInfo(state = defaultState, action) {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loggedIn: action.loggedIn,
        userid: action.userid,
        token: action.token
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        loggedIn: action.loggedIn,
        userid: 'userid',
        token: 'token'
      }
    default:
      return state;
  }
}
