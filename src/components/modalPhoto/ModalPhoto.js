import React, {useContext} from 'react'
import './modalPhoto.scss'
import { MainContext } from '../../context/mainContext';




export const ModalPhoto = () =>{

const {state} = useContext(MainContext)

const cls = ['modalPhoto']

if(state.showPhoto){
    cls.push('showModalPhoto')
}
    return(
        <div className = {cls.join(' ')}>
        <div className = 'modalPhotoHead'>
            <i className = 'fa fa-times'
                onClick = {()=> state.hidePhotoHandler()}
            />
        </div>
            <div className = 'photoContent'>
                <img src = {state.photoId} alt = {state.photoId}/>
            </div>

        </div>
    )
}