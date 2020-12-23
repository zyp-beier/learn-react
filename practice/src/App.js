import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import 'element-theme-default';
import Index from "./page/layout/layout";
export default class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Index />
                </div>
            </BrowserRouter>
        );
    }
}
