import React from "react";
import {BrowserRouter, Link,Switch, Route} from "react-router-dom";
import One from "./secondary/One";
import Two from "./secondary/Two";
import Three from "./secondary/Three";

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <div>
                <div>
                    <ul>
                        <li>关于我们</li>
                        <li>{this.props.match.params.gid}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to='/about/one'> 二级路由one</Link></li>
                        <li><Link to='/about/two'> 二级路由two</Link></li>
                        <li><Link to='/about/three'> 二级路由three</Link></li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/about/one' component={One} exact/>
                            <Route path='/about/two' component={Two} />
                            <Route path='/about/three' component={Three} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
