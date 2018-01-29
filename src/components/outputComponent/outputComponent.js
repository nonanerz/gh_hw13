import React, { Component } from 'react'

export default class Test extends Component {
  render () {
    return (
      <div>
          {this.props.show ?
              <table className="table table-hover">
                  <tbody>
                  <tr>
                      <td>Name</td>
                      <td>{this.props.someUserName}</td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td>{this.props.someUserEmail}</td>
                  </tr>
                  <tr>
                      <td>Phone</td>
                      <td>{this.props.someUserPhone}</td>
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td>{this.props.someUserAddress}</td>
                  </tr>
                  <tr>
                      <td>Postcode</td>
                      <td>{this.props.someUserPostcode}</td>
                  </tr>
                  <tr>
                      <td>Date Of Birth</td>
                      <td>{this.props.dateOfBirth}</td>
                  </tr>
                  </tbody>
              </table>
              :
              ''}
      </div>
    )
  }
}
