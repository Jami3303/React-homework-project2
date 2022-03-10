import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
         title: "Webbrain academy",
         count: 0,
         width: 100,
         height:100,
      }
  }
                                                               //  RENDER

  render() {
      const change = ()=>{
      this.setState({title: "it academy", count: 1});

      };

      const titlechange = (event)=>{
        this.setState({title: event.target.value})
        console.log(event.target.value);
      };

      const plus = ()=>{
        if (this.state.count < 10 )
        this.setState({count: this.state.count +1});
        if (this.state.count === 10 )
        this.setState({count: 0})
      };
      
      const minus = ()=>{
        if (this.state.count > 0)
        this.setState({count: this.state.count -1});
      };
      const height = (e)=>{
       this.setState({height: e.target.value})
     };
      const width = (event)=>{
        this.setState({with: event.target.value})
      } ;


                                                              //  RETURN 
    return (
      <div>
           <h1>{this.state.title}  {this.state.count}</h1>
           <input type='text' onChange={titlechange}/>
           <button onClick={change }>change</button>
           <button onClick={plus }>+</button>
           <button onClick={minus }>-</button> <br/>
           <input type='text' placeholder='width' onChange={width} />
           <input type='text' placeholder='height' onChange={height} />
           <div style={{height: `${this.state.height}px`,  width: `${this.state.width}px`}} className='box'>box</div>
      </div>
    )
  }
}
