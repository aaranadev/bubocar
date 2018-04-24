import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  add,
  getData,
} from './actions'
import logo from './logo.svg'
import './App.css'
import {
  Form,
  Mirror,
} from '../../components/Forms'

class App extends Component {
  componentDidMount() {
    this.props.actions.getData()
  }

  render() {
    const { props } = this

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="A pp-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="ip">
            <span className="span">What's my ip?</span>
            <span className="span">{props.app.data.ip}</span>
          </div>
          <div className="formContainer">
            <Form/>
            <Mirror/>
          </div>
          <div className="todoContainer">
            <button
              className="addButton"
              onClick={() => props.actions.add(props.app.todo.length)}
            >
              Add Todo
            </button>
            <div className="todos">
              {
                props.app.todo.map((value, index) => (
                  <div key={index} className="todo">{value}</div>
                ))
              }
            </div>
          </div>
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
      {
        add,
        getData,
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
