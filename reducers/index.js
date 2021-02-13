import { combineReducers } from "redux"
export function title(state= "", action) {
    switch(action.type) {
        case "HEADER_TITLE":
            return action.payload;
        default:
            return state
    }
}

export function destination(state = [], action) {
    switch(action.type) {
        case "SET_DESTINATION":
            return [
                ...state,
                action.payload
            ];
            default:
                return state;
    }
}

export function firstname(state="", action) {
    switch(action.type) {
        case "HEADER_TITLE":
            return action.payload;
        default:
            return state
    }   
}

export default combineReducers({
    title,
    destination
})

