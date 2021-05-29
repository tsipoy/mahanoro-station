import { combineReducers } from "redux";
// export function title(state = "", action) {
//   switch (action.type) {
//     case "HEADER_TITLE":
//       return action.payload;
//     default:
//       return state;
//   }
// }

export function stations(state = [], action) {
  switch (action.type) {
    case "SET_STATION":
      return [...state, action.payload];
    default:
      return state;
  }
}

// const initialState = {
//   destination: []
// }

export function destination(state = [], action) {
  switch (action.type) {
    case "SET_DESTINATION":
      return [...state, action.payload];
    default:
      return state;
  }
}

export function setDestinationDetail(state = "", action) {
  switch (action.type) {
    case "SET_DESTINATION_DETAIL":
      return action.payload;
    default:
      return state;
  }
}

export function myAccount(state = "", action) {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return action.payload;
    case "SET_LASTNAME":
      return action.payload;
    case "SET_PHONE_NUMBER":
      return action.payload;
    default:
      return state;
  }
}

export function account(state = "", action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return [...state, action.payload];
    default:
      return state;
  }
}


export function daysOfTheWeek(state = [], action) {
  switch (action.type) {
    case "SET_DAY_OF_THE_WEEK":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  stations,
  account,
  destination,
  daysOfTheWeek,
});
