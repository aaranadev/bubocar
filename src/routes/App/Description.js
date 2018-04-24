import React from 'react'
import { noop } from './utils/functionUtils'

function Description(props) {
    return (
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    )
}

export function Description2(props) {
    return (
        <button className="App-intro" onClick={noop}>
            Que pasa!
        </button>
    )
}

export default Description
