import React, { Component } from 'react'
import './navbar.css'
import Search from '../img/search (2).png'
import Group from '../img/Group 1.png'
import Navicon from '../img/navicon.png'



export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-wrapper'>
            <img className='nav-group' src={Group} alt='error'/>
            <img className='nav-icon' src={Navicon} alt='error'/>
            <p className='nav-p'>Xizmatlar</p>
            <p className='nav-p'>Loyixalar</p>
            <p className='nav-p'>Biz xaqimizda</p>
            <div className='nav-rightside'>
                <p className='nav-number'>+998(71) 299-86-89</p>
                <img className='nav-search-icon' alt='error' src={Search}/>
                 <button className='nav-btn'>Savol berish</button>
            </div>
      </div>
    )
  }
}

