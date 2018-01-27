import React, { Component } from 'react'

export default class Test extends Component {
  constructor (props) {
    super(props)
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount () {
    console.log('props in component', this.props)
  }
  changeName ({target: {value}}) {
    this.props.changeStateProps('name', value)
  }
  render () {
    return (
      <div>
        <input type='text' onChange={this.changeName} />
      </div>
    )
  }
}
