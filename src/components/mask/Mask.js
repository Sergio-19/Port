import React, {useContext} from 'react'
import './mask.scss'
import { MainContext } from '../../context/mainContext';


export const Mask = () =>{

    const {state} = useContext(MainContext)

    



    const cls = ['mask']

    if(state.showPhoto){ cls.push('showMask')}

    return(
        <div className = {cls.join(' ')}
             onClick = {()=> state.hidePhotoHandler()}   
        >

        </div>
    )
}