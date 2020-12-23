import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import My from'../../page/My/My'
import Purchased from '../../page/Purchased/Purchased.jsx'
import Index from '../../page/Index/Index'

export default class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact  path='/' component={Index}></Route>
          <Route exact  path='/purchased' component={Purchased}></Route>
          <Route exact  path='my' component={My}/>
        </div>
      </Router>
    )
  }
}
