import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TestComponent from './components/test-component/testComponentContainer'
import SecondComponent from './components/secondComponent/secondComponentContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <TestComponent testName='Kristina' />
        <SecondComponent />
      </div>
    )
  }
}

export default App
