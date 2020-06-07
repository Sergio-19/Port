import { GO_PASS } from "../actionTypes";


const initialState = {
    password: '123',
    passwordValue: '',
    access: false
}


export default function pass(state = initialState, action){
    switch(action.type){
        case GO_PASS:
        return{
            ...state,
            access: state.password === state.passwordValue ? true : false,
            passwordValue: action.payload
            
        }


        default:
        return state
    }
}