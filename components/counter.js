import React, { Component } from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {count: 0}
  }
  increaseCounter(){
    this.setState({count: this.state.count +1})
  }

  render () {
    console.log('rendering')
    return (
      <div>
        <h3> hi i am {this.props.name} </h3>
        <h3> date {this.props.date} </h3>
        <h1>My Count is: {this.state.count}</h1>
        <button onClick = {this.increaseCounter.bind(this)}> My Counter</button>
      </div>
      )
  }

}

export default Counter
