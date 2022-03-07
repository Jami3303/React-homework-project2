import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {
  render() {
    return (
      <div className='card'>
          <img alt='error' src={this.props.img}/>
          <div className='card-wrapper'>
             <p className='card-item'>{this.props.title1}</p>
             <p className='card-item'>{this.props.title2}</p>
             <p></p>
             <p></p>
             <p className='card-p plus'>{this.props.p1} </p>
             <p className='card-p'>{this.props.p2} </p>
             <p className='card-p'>{this.props.p3} </p>
             <p className='card-p'>{this.props.p4} </p>
             <p className='card-p'>{this.props.p5}</p>
            <div className='card-last'>
                 <p className='card-last-p1'>{this.props.date}</p>
                 <p className='card-last-p1 batafsil'>{this.props.batafsil}</p>
            </div>
          </div>
      
      </div>
    )
  }
}
