import React from 'react'
import './home.scss'
import main from '../../../image/main.png'


export const Home = () =>{

    return(
        <div className = 'home'>

        <div className = 'main'>
            <img src = {main} alt = 'main'/>
        </div>

        <div className = 'homeContent'>
        
        <div className = 'homeContentHead'>
        <h1>Hyundai Santa Fe </h1>
        
        
        </div>


        <div className = 'homeContentTxt'>

        <h3>Общие данные:</h3>

        <p> 
            <span>Hyundai Santa Fe - </span>

            кроссовер созданный на платформе Hyundai Sonata, назван в честь города в Нью-Мексико.
            Выпускается компанией Hyundai Motor Company с 2001 года по настящее время.
            Автомобиль пользуется большой популярностью, в виду этого он постоянно совершенствуется.
            сегодня на рынке представлено уже четвертое поколение этого авто.  
        

        </p>
        
        </div>
        
        
        
        
        </div>


        </div>
    )
}