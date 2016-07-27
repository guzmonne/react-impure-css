import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main.js'

window.__app_container = document.getElementById('root')

ReactDOM.render(<Main />, window.__app_container )