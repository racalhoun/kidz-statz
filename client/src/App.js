import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LoginPage from './components/home/LoginPage'
import UserRegistrationForm from './components/user/UserRegistrationForm'
import ChildRegistrationForm from './components/user/ChildRegistrationForm'
import StatsRegistrationForm from './components/user/StatsRegistrationForm'
import ParentShow from './components/parents/ParentShow'
import ChildShow from './components/child/ChildShow'
import StatShow from './components/stats/StatShow'
import styled from 'styled-components'
import moment from 'moment'
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            
          </div>
           <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/user" component={UserRegistrationForm}/>
            <Route exact path="/children/:userId" component={ChildRegistrationForm}/>
            <Route exact path="/stats/:childId" component={StatsRegistrationForm}/>
            <Route exact path="/parent/:userId" component={ParentShow}/>
            <Route exact path="/child/:childId" component={ChildShow}/>
            <Route exact path="/children/:childId/stats" component={StatShow}/>
          </Switch> 
        </div>
      </Router>
    )
  }
}

export default App
