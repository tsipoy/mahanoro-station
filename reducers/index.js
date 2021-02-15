import { combineReducers } from "redux";
// export function title(state = "", action) {
//   switch (action.type) {
//     case "HEADER_TITLE":
//       return action.payload;
//     default:
//       return state;
//   }
// }

// export function title(state = "", action) {
//   switch (action.type) {
//     case "HEADER_TITLE":
//       return action.payload;
//     default:
//       return state;
//   }
// }

const initialState = {
  destination: []
}

export function destination(state = initialState, action) {
  switch (action.type) {
    case "SET_DESTINATION":
    return {...state, destination: action.payload};
    default:
      return state;
  }
}

// export function myAccount(state = "", action) {
//   switch (action.type) {
//     case "FIRST_NAME":
//       return action.payload;
//     case "LAST_NAME":
//       return action.payload;
//     case "PHONE_NUMBER":
//       return action.payload;
//     default:
//       return state;
//   }
// }

export function account(state="", action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  // title,
  account,
  destination
});
