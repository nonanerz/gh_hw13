import React, { Component } from 'react'

export default class Test extends Component {
  render () {
      console.log(this.props.show)
    return (
      <div>
          {this.props.show ?
              <ul>
                  <li>{this.props.someUserName}</li>
                  <li>{this.props.someUserEmail}</li>
                  <li>{this.props.someUserPhone}</li>
                  <li>{this.props.someUserAddress}</li>
                  <li>{this.props.someUserPostcode}</li>
                  <li>{this.props.dateOfBirth}</li>
              </ul>
              :
              ''}
      </div>
    )
  }
}
