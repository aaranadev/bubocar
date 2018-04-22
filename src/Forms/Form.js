import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { change } from './actions'
import './Forms.css'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    event.stopPropagation()

    const { target } = event
    const { name, value } = target

    this.props.actions.change(value, name)
  }

  render() {
    const { props } = this
    const { form } = props

    return (
      <form>
        <Row
          label="Email"
          name="email"
          value={form.email}
          onChange={this.handleChange}
        />
        <Row
          label="Nombre"
          name="name"
          value={form.name}
          onChange={this.handleChange}
        />
        <Row
          label="Apellidos"
          name="surname"
          value={form.surname}
          onChange={this.handleChange}
        />
    </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        change,
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

function Row(props) {
  return (
    <div className="row">
      <label className="label">{props.label}</label>
      <input
        className="input"
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        onChange={(event) => props.onChange(event)}
      />
    </div>
  )
}
