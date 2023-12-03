import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Team from './components/toppers/Team'


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/team' exact component={Team} />
        </Switch>
      </Router>
    </>
  )
}

export default App