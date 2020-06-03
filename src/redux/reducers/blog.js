import { GET_BLOGS } from "../actionTypes";

const initialState = {
    blogs: ''
}


export default function blog(state = initialState, action){
    switch(action.type){
        case GET_BLOGS:
        return{
            blogs: action.payload
        }



        default:
        return state
    }
}