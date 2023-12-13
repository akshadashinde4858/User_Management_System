import React, { Component } from 'react'
import b from './b'

export default class c extends {Component,b}{
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.address}</h1>
        <h1>{this.props.phone}</h1>
      </div>
    )
  }
}
