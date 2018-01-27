import React, { Component } from 'react'
import './App.css'
import FormComponent from './components/formComponent/formComponentContainer'
import OutputComponent from './components/outputComponent/outputComponentContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <FormComponent />
        <OutputComponent />
      </div>
    )
  }
}

export default App
