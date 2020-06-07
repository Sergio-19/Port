import { GO_PASS } from "../actionTypes";


export function goPassHandler(value){
    return{
        type: GO_PASS,
        payload: value
    }
}