import {createStore} from "redux";

export const actionCashAlbumList = (data) => {
    return {
        type: 'CASH ALBUM LIST',
        payload: data
    }
}

export const actionCashAlbum = (data) => {
    return {
        type: 'CASH ALBUM',
        payload: data
    }
}

const defaultState = {
    albumList: [],
    currentAlbum: {}
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