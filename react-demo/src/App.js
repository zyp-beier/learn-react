import React from 'react';
import './App.css';
import InputThree from "./NewInput";
import Thermometer from "./Thermometer";
import Components from "./demo/Components";
import Parent from "./parent/Parent";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Index from "./page/Index";
import Product from "./page/Product";
import About from "./page/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        {/*<Demo/>*/}
        {/*<Input/>*/}
        {/*<Container />*/}
        {/*<InputThree />*/}
        {/*<Thermometer/>*/}
        {/*<Components />*/}
        {/*<Parent />*/}
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Index} exact/>
                <Route path='/product/:id' component={Product} />
                <Route path='/about/:gid' component={About} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
