import { SHOW_PHOTO, FETCH_PHOTOS, HIDE_PHOTO } from "../actionTypes";
import axios from 'axios'



export function getPhoto(){

    return async (dispatch) =>{
        axios('https://port-46f9e.firebaseio.com/photo.json')
        .then((response)=>{
            dispatch(fetchPhotos(response.data))
          
        })


    }


}

export function showPhotoHandler(id, photos){
    return async (dispatch) =>{
        
        let photoId = '';
        for(let key in photos){
            if(key === id){photoId = photos[id].img}
        }

        dispatch(photoHandler(photoId))
    }
}


export function fetchPhotos(value){
    return{
        type: FETCH_PHOTOS,
        value: value
    }
}


export function photoHandler(id){
    return{
        type: SHOW_PHOTO,
        payload: id
        
    }
}

export function hidePhotoHandler(){
    return{
        type: HIDE_PHOTO
    }
}