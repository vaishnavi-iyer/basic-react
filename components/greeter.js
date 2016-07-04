import React, { Component } from 'react'

class Greeter extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <h2> I am here</h2>
      </div>)
  }

}

export default Greeter
