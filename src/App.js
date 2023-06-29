import React, { Component } from 'react'

export default class App extends Component {
 
 state = {
  num:0
 }
  render() {
const {num} = this.state
    return (
      <div>
      
        <div className="App" style={{background : 'red' }}>
     <h1>{num}</h1>
    <p>
      {num === 15 ? 'max' : num === 1 ? 'min' : num === 11 ? 'get out of here': ''}
    </p>
    <button onClick= { () => {
      if(num < 15){
        this.setState({num:num+1})
      }
     
    }}>+</button>

    <button onClick={() => {
    if(num > 0){
      this.setState({num:num-1})
    };
      
    }}>-</button>

    <button onClick={() => {
          this.setState({num:0})
    }}>reset</button>

    <button onClick={() => {
        this.setState({num:num+5})
    }}>+5</button>

    <button onClick={() => {
         this.setState({num:1})
    }}>min</button>

<button onClick={() => {
        this.setState({num:15})
    }}>max</button>



    </div>
      </div>
    )
  }
}
