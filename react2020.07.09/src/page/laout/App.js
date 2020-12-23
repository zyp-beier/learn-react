import React from 'react';
import './App.css';
import Index from "../index/Index";
import Update from "../LifeCycle/Update";
import Login from "../login/Login";
import JSX from "../JSX/JSX";
import SetState from "../setState/SetState";
import Components from "../component/Component";
import ComponentsCategory from "../ComponentsCategory/ComponentsCategory";
import IntelligentComponent from "../ComponentsCategory/IntelligentComponent";
import NewComponent from "../ComponentsCategory/HigherOrderComponent";
import {Example, Exanole2} from "../hook/hook";


function App() {
    return (
        <div className="App">
            {/* <Index /> */}
            {/* <Update/> */}
            {/* <Login/> */}
            {/* <JSX /> */}
            {/* <SetState /> */}
            {/* <Components/> */}
            {/* <Components name={'react'}/> */}
            {/* <ComponentsCategory/> */}
            <IntelligentComponent/>
            <NewComponent/>
            <Example/>
            <Exanole2 />
        </div>
    );
}

export default App;
