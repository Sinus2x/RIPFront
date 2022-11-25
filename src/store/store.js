import {createStore} from "redux";

const defaultState = {
    albumList: [],
    currentAlbum: undefined
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "CASH ALBUM LIST":
            return {...state, albumList: action.payload}
        case "CASH ALBUM":
            return {...state, currentAlbum: action.payload}
        default:
            return state
    }
}

export const store = createStore(reducer)