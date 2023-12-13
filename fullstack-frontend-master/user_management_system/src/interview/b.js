import React, { Component } from 'react'

export default class  extends Component {
  render() {
    constructor(props) {
        super(props)
    }
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.address}</h1>
        <h1>{this.props.phone}</h1>
      </div>
    )
  }
}
