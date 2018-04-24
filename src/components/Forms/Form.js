import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { change } from './actions'
import './Forms.css'

export class Form extends Component {
  render() {
    const { props } = this
    const { form } = props

    return (
      <form>
        <Row
          label="Email"
          name="email"
          onChange={this.props.actions.change}
        />
        <Row
          label="Nombre"
          name="name"
          onChange={this.props.actions.change}
        />
        <Row
          label="Apellidos"
          name="surname"
          onChange={this.props.actions.change}
        />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        change
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

class Row extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    value: undefined,
  }

  handleChange(event) {
    event.preventDefault()
    event.stopPropagation()

    const { target } = event
    const { name, value } = target

    this.setState(state => ({
      ...state,
      [name]: value,
    }))

    this.props.onChange(value, name)
  }

  render() {
    const { props, state } = this

    return (
      <div className="row">
        <label className="label">{props.label}</label>
        <input
          className="input"
          name={props.name}
          type={props.type || 'text'}
          value={state.value}
          onChange={event => this.handleChange(event)}
        />
      </div>
    )
  }
}
