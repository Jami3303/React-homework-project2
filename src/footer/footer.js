import React, { Component } from 'react'
import './footer.css'
import footer from '../img/footer.png'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <img className='footer-img' src={footer} alt='error'/>
      </div>
    )
  }
}
