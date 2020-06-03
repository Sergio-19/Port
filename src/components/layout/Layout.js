import React from 'react'
import './layout.scss'
import { Header } from '../header/Header';
import {Switch, Route} from 'react-router-dom'
import { Home } from '../pages/home/Home';
import {History} from '../pages/history/History'
import {Blog} from '../pages/blog/Blog'
import {Photo} from '../pages/photo/Photo'
import {Info} from '../pages/info/Info'
import { Footer } from '../footer/Footer';


export const Layout = () =>{

    return(
        <div className = 'layout'>
        <Header/>
            <div className = 'layoutContainer'>

            

            <Switch>
                 <Route path = '/' exact render = {()=> <Home />}/> 
                 <Route path = '/history' render = {()=> <History />}/>
                 <Route path = '/blog' render = {()=> <Blog />}/>  
                 <Route path = '/photo' render = {()=> <Photo />}/>   
                 <Route path = '/info' render = {()=> <Info />}/>    

            </Switch>

            


            </div>

            <Footer/>

        </div>
    )
}