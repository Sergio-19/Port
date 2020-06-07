import React, {useContext} from 'react'
import './blog.scss'
import { MainContext } from '../../../context/mainContext';


export const Blog = () =>{
const {state} = useContext(MainContext)

const blogs = state.blog


    return(
        <div className = 'blogWrap'>
        
       {Object.keys(blogs).map((blog, i)=>{
           return(

            <div className = 'blog' key = {i}>
            <div className = 'blogImg'>
            <img src = {blogs[blog].img} alt = {blogs[blog].img}/>
            </div>
    
            <div className = 'blogTxt'>
            <h3>{blogs[blog].head}</h3>
            <p>
           {blogs[blog].text}
            <span> Далее...</span>
            </p>
            </div>
             </div>
           )
       })}
        
        
        
        </div>
    )
}