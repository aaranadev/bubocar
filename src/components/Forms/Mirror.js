import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class Mirror extends Component {
  render() {
    const { props } = this
    const { form } = props

    return (
      <div>
        <Row
          label="email"
          value={form.email}
        />
        <Row
          label="name"
          value={form.name}
        />
        <Row
          label="surname"
          value={form.surname}
        />
      </div>
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
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mirror)

function Row(props) {
  return (
    <div className="row">
      <span className="label">{props.label}</span>
      <span className="value">
        {
          props.value
        }
      </span>
    </div>
  )
}
