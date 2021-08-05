import React, {Suspense} from 'react'
import {Route, Switch} from "react-router-dom";
import One from "../one/one";
import Two from "../two/two";
import Three from "../three/three";
import NoMatch from "../noMatch/noMatch";
import Four from "../four/four";
import Five from "../five/five";
import Six from "../six/six";
import Seven from "../seven/seven";
import Eight from "../eight/eight";
import Nine from "../nine/nine";
import MContext from "../context/MContext";
const CodeSegmentation = React.lazy(() => import('../codeSegmentation/index'))
export default class Main  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
render() {
        return(
            <div>
                面包屑
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path='/'  component={One} exact/>
                        <Route path='/two'  component={Two}/>
                        <Route path='/three'  component={Three}/>
                        <Route path='/Four' component={Four}/>
                        <Route path='/five' component={Five}/>
                        <Route path='/six' component={Six}/>
                        <Route path='/seven' component={Seven}/>
                        <Route path='/eight' component={Eight}/>
                        <Route path='/codeSegmentation' component={CodeSegmentation} />
                        <Route path='/Context' component={MContext}/>
                        <Route path='/nine' component={Nine}/>
                        <Route component={NoMatch} />
                    </Switch>
                </Suspense>
            </div>
        )
}
}
