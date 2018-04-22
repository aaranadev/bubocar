import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add } from './actions'
import logo from './logo.svg'
import './App.css'
import {
  // Description,
  // Description2
} from './Description'

class App extends Component {
  render() {
    const { props } = this

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Description2 /> */}
        <button onClick={() => props.actions.add(props.app.todo.length)}>Add</button>
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
      {
        add,
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
