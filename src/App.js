import React from 'react';
import {connect} from 'react-redux'

import './App.scss';
import { MainContext } from './context/mainContext';
import { Layout } from './components/layout/Layout';
import { menuHandler } from './redux/actionCreators/menu';
import { getPhoto, showPhotoHandler, hidePhotoHandler} from './redux/actionCreators/photo'
import { getBlogs } from './redux/actionCreators/blog';
import { Mask } from './components/mask/Mask';
import { ModalPhoto } from './components/modalPhoto/ModalPhoto';
import { goPassHandler } from './redux/actionCreators/pass';


class App extends React.Component{



  componentDidMount(){
    this.props.getBlogs()
    this.props.getPhoto()
  }




  render(){

  

    return(
      <MainContext.Provider  value = {{
        state: this.props
      }}>
         <ModalPhoto/>
         <Mask />
         <Layout/>
      </MainContext.Provider>
       

     
    )
  }
}







function mapStateToProps(state){
  return{
    menu: state.menu.showMenu,
    blog: state.blog.blogs,

    showPhoto: state.photo.showPhoto,
    photoId: state.photo.photoId,
    photo: state.photo.photo,

    password: state.pass.password,
    passwordValue: state.pass.passwordValue,
    access: state.pass.access


  }
}

function mapDispatchToProps(dispatch){
  return{

    menuHandler: ()=> dispatch(menuHandler()),
    getBlogs: ()=> dispatch(getBlogs()),
    getPhoto: ()=> dispatch(getPhoto()),
    showPhotoHandler: (id, photos)=> dispatch(showPhotoHandler(id, photos)),
    hidePhotoHandler: ()=> dispatch(hidePhotoHandler()),
    goPassHandler: (value)=> dispatch(goPassHandler(value))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
