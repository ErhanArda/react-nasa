import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Home } from './components'
import { NasaPhoto } from './components'
import './App.css'


const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route component={Home} path="/react-nasa" exact />
        <Route component={NasaPhoto} path="/nasa-photo" exact />
      </Switch>
    </div>
  )
}

export default App
