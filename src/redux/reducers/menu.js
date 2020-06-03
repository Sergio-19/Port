import { SHOW_MENU } from "../actionTypes";


const initialState = {
    showMenu: false
}
export default function menu(state = initialState, action){
    switch(action.type){
        case SHOW_MENU:
        return{
            showMenu: !state.showMenu
        }


        default:
        return state
    }
}