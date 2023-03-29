import React, { Component } from 'react'

export default class State extends Component {
 constructor(){
    super()
    this.state = {college : "Skcet"}
 }
  render() {
    return (
      <div>
         <h1>Studying in {this.state.college}</h1>
      </div>
    )
  }
}
