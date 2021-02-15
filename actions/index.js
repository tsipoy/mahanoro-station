// import fetchingStationData from "../fetchingStationData";
// console.log(fetchingStationData);

// export function destination() {
//     return {
//         type: "SET_DESTINATION",
//         payload: fetchingStationData,
//     }
// }

// const ENDPOINT =
//   "https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json";

// export const destination = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(ENDPOINT);
//       const data = await res.json();
//       let station = data.destination;
//       const stations = [];

//       station.map((station) => {
//         stations.push(station.destination);
//       });

//       dispatch({
//         type: "SET_DESTINATION",
//         destination: stations,
//       });

//       return dispatchLogin(await data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

export function destination() {
    return {
        type: "HEADER_TITLE",
        payload: {destination},
    }
}

// export function title(title) {
//     return {
//         type: "HEADER_TITLE",
//         payload: title,
//     }
// }

// export function firstname(firstname) {
//     return {
//         type: "FIRST_NAME",
//         payload: firstname,
//     }
// }

// export function lastname(lastname) {
//     return {
//         type: "LAST_NAME",
//         payload: lastname,
//     }
// }

// export function phoneNumber(number) {
//     return {
//         type: "PHONE_NUMBER",
//         payload: number,
//     }
// }

export function account(account) {
  return {
    type: "SET_ACCOUNT",
    payload: account,
  };
}
