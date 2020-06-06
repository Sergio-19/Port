import { SHOW_PHOTO, FETCH_PHOTOS, HIDE_PHOTO } from "../actionTypes";

const initialState = {
    showPhoto: false,
    photoId: '',
    photo: ''
}


export default function photo(state = initialState, action){
    switch(action.type){
        case FETCH_PHOTOS:
        return{...state,
                photo: action.value
        }
        case SHOW_PHOTO:
        return{
            ...state,
            showPhoto: true,
            photoId: action.payload || '',
            

        }
        case HIDE_PHOTO:
        return{
            ...state,
            showPhoto: false,
        }
        default:
        return state
    }
}