import React from "react"
import ReactDOM from 'react-dom'
import { App } from './App.js';
import './css/site.css';
import 'semantic-ui-css/semantic.min.css'
import store from './Redux/configureStore'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));