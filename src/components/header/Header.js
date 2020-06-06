import React, {useContext} from 'react'
import './header.scss'
import logo from '../../image/logo.png'
import { MainContext } from '../../context/mainContext';
import {NavLink} from 'react-router-dom'


export const Header = () =>{

const {state} = useContext(MainContext)

const cls = ['fa']

if(state.menu){
    cls.push('fa-times')
}else{cls.push('fa-bars')}

    return(
        
        <header>
            <div className = 'logo'>
                <img src = {logo} alt = 'logo'/>
            </div>
            <div className = 'adapt'>
                <div className = 'burger'>
                    <i className = {cls.join(' ')}
                        onClick = {state.menuHandler}
                    />
                </div>

                <div className = 'adaptNav' style = {{height: state.menu ? '12rem' : '.2px', transition: 'all .3s ease-in'}}>
                <ul>
                    <li><NavLink to = '/'>Главная</NavLink></li>
                    <li><NavLink to = '/history'>История</NavLink></li>
                    <li><NavLink to = '/blog'>Статьи</NavLink></li>
                    <li><NavLink to = '/photo'>Фото</NavLink></li>
                    <li><NavLink to = '/info'>Информация</NavLink></li>
                </ul>
                
                </div>


            </div>

            <nav>
                <ul>
                    <li><NavLink to = '/'>Главная</NavLink></li>
                    <li><NavLink to = '/history'>История</NavLink></li>
                    <li><NavLink to = '/blog'>Статьи</NavLink></li>
                    <li><NavLink to = '/photo'>Фото</NavLink></li>
                    <li><NavLink to = '/info'>Информация</NavLink></li>
                </ul>
            </nav>
            
        </header>
     
    )
}