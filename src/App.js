import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg'
import './App.css'
import {
  Form,
  Mirror,
} from './Forms'

class App extends Component {
  render() {
    // const { props } = this

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <Form/>
          <Mirror/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
