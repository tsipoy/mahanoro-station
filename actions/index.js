export function title(title) {
    return {
        type: "HEADER_TITLE",
        payload: title,
    }
}

export const fetchingStationData = () => {
    return async (dispatch) => {
        try{
            const res = await fetch("https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json");
            const data = await res.json();
            function dispatchLogin(resp){
                dispatch({
                    type: "SET_DESTINATION",
                    payload: {
                        destination: resp.destination
                    }
                })
            }
            return dispatchLogin(await data)

        } catch(error) {
            console.error(error);
        }
    }    
}

export function firstname(firstname) {
    return {
        type: "FIRST_NAME",
        payload: firstname,
    }
}

export function lastname(lastname) {
    return {
        type: "LAST_NAME",
        payload: lastname,
    }
}

export function phoneNumber(number) {
    return {
        type: "PHONE_NUMBER",
        payload: number,
    }
}