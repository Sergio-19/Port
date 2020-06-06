import React, {useContext} from 'react'
import './photo.scss'

import { MainContext } from '../../../context/mainContext';


export const Photo = () =>{

    const {state} = useContext(MainContext)

   

    return(
        <div className = 'photoPageWrapper'>

            

            <div className = 'photoPageContent'>

              {Object.keys(state.photo).map((photo, i)=>{
                  return(
                    <div className = 'photoPageCard' key = {i}>
                    <img src = {state.photo[photo].img} alt = {state.photo[photo].img}
                         onClick = {()=> state.showPhotoHandler(photo, state.photo)}
                    
                    />
                </div>
                  )
              })}

                
            </div>

        </div>
       
    )
}