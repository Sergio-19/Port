import React, {useContext} from 'react'
import './info.scss'
import { MainContext } from '../../../context/mainContext';


export const Info = () =>{

    const {state} = useContext(MainContext)



    return(
        <div className = 'infoPage'>


        {state.access ? 
            <h1>Добро пожаловать! Это секретная страница!</h1> :

        <div className = 'inside'>
       <input type = 'password' 
              id = 'pass' 
              placeholder = 'Введите пароль' 
              onChange = {(event)=> state.goPassHandler(event.target.value)}
              />
       </div>        
    }
       
        
        
        </div>
    )
}