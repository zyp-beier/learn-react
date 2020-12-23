import React from 'react';
import './App.css';
import Index from "../index/Index";
import Update from "../LifeCycle/Update";
import Event from "../event/Event";
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
            {/*    <Index />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Update/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Event />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Login/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <JSX />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <SetState />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    /!*<Components/>*!/*/}
            {/*    <Components name={'react'}/>*/}
            {/*</div>*/}
            {/*<ComponentsCategory/>*/}
            {/*<IntelligentComponent/>*/}
            <NewComponent/>
            <Example/>
            {/*<Exanole2 />*/}
        </div>
    );
}

export default App;
