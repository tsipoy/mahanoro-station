// import stationData from "../stationData.json";
// console.log(stationData);
export function destination(stationData) {
    return {
        type: "SET_DESTINATION",
        payload: stationData,
    }
}

export function stations(station) {
  return {
    type: "SET_STATION",
    payload: station,
  }
}

export function firstname(firstname) {
  return {
    type: "SET_FIRSTNAME",
    payload: firstname,
  };
}

export function daysOfTheWeek(days) {
  return {
    type: "SET_DAY_OF_THE_WEEK",
    payload: days,
  };
}

export function lastname(lastname) {
  return {
    type: "SET_LASTNAME",
    payload: lastname,
  };
}

export function phoneNumber(phoneNumber) {
  return {
    type: "SET_PHONE_NUMBER",
    payload: phoneNumber,
  };
}

export function setDestinationdetails(detail) {
  return {
    type: "SET_DESTINATION_DETAIL",
    payload: detail,
  };
}
