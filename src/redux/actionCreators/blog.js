import { GET_BLOGS } from "../actionTypes";
import axios from 'axios'


export function getBlogs(){

    return async (dispatch) =>{
        axios('https://port-46f9e.firebaseio.com/blogs.json')
        .then((response)=>{
            dispatch(fetchBlogs(response.data))
          
        })


    }

}


export function fetchBlogs(blogs){
    return{
      type: GET_BLOGS,
      payload: blogs  
    }
    
}