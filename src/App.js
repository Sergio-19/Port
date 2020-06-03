import React from 'react';
import {connect} from 'react-redux'

import './App.scss';
import { MainContext } from './context/mainContext';
import { Layout } from './components/layout/Layout';
import { menuHandler } from './redux/actionCreators/menu';
import { getBlogs } from './redux/actionCreators/blog';


class App extends React.Component{



  componentDidMount(){
    this.props.getBlogs()
  }


  render(){

    return(
      <MainContext.Provider  value = {{
        state: this.props
      }}>
         <Layout/>
      </MainContext.Provider>
       

     
    )
  }
}







function mapStateToProps(state){
  return{
    menu: state.menu.showMenu,
    blog: state.blog.blogs

  }
}

function mapDispatchToProps(dispatch){
  return{

    menuHandler: ()=> dispatch(menuHandler()),
    getBlogs: ()=> dispatch(getBlogs())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
