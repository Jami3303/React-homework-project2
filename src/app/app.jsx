import React, { Component } from 'react';
import Footer from '../footer/footer'
import Body from '../body/body'
import Navbar from '../navbar/navbar'
import './app.css'
export default class App extends Component {
 

  render() {
    return(
       <div className='wrapper'> 
               <Navbar/>
               <Body/>
               <Footer/>
      </div>
    );
  }
}


 
 
 
