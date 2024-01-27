import App from './App'
import React from 'react'
import  ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ContextData from './Context/ContextData'


ReactDOM.render(
    <ContextData>
<BrowserRouter><App/></BrowserRouter>
</ContextData>,document.querySelector(".root"))