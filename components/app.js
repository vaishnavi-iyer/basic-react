import React, { Component } from 'react'
import Counter from './counter'

class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Counter name="1" date="05/07/2016" />
        <Counter name="2" date="05/07/2016" />
      </div>)
  }

}

export default App
