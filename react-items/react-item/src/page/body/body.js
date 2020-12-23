import React from 'react';
import Slide from "./slide/slide";
import {Layout} from 'element-react'
import './body.css'
import Router from  'react-router';
import One from './one/one'
import Two from "./two/two";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NoMatch from "../noMatch/noMatch";

export default class Body extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    handleGet(val){
        console.log(val)
        this.setState({
            value: val
        });
        // console.log(this.state.value)
    }
    render() {
        return <div className='body'>
                    <Layout.Row gutter="20">
                        <Layout.Col span="6"><Slide handleGet={this.handleGet.bind(this)}/></Layout.Col>
                        <Layout.Col span="14">
                            {/*<BrowserRouter>*/}
                                <Switch>
                                    <Route path='/' component={One} exact/>
                                    <Route path='/two' component={Two}/>
                                    <Route component={NoMatch} />
                                </Switch>
                            {/*</BrowserRouter>*/}
                        </Layout.Col>
                    </Layout.Row>
        </div>
    }
}
