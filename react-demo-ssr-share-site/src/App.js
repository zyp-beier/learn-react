import React from 'react';
import './style/App.css';

import Index from './views/index'
import AboutUs from "./views/aboutUs";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./views/404";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
                <Switch>
                    <Route path='/' exact component={Index} />
                    <Route path='/about' component={AboutUs} />

                    <Route component={NotFound} />
                </Switch>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
