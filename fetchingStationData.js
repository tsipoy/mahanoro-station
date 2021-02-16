// const ENDPOINT = "https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json"

// export const fetchingStationData = async () => {
//     return (dispatch) => {
//         try{
//             const res = await fetch(ENDPOINT);
//             const data = await res.json();
//             function dispatchLogin(data){
//                 dispatch({
//                     type: "SET_DESTINATION",
//                     payload: {
//                         destination: data.destination
//                     }
//                 })
//             }
//             return dispatchLogin(await data)

//         } catch(error) {
//             console.error(error);
//         }
//     }    
// }