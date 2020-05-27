import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Home } from './components'
import { NasaPhoto } from './components'


const App = () => {
  return (
    <div>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasa-photo" exact />
      </Switch>
    </div>
  )
}

export default App
