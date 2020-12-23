import React from "react";
import {Link,Switch,Route} from "react-router-dom";
import AA from "../third_level/AA";
import BB from "../third_level/BB";
import CC from "../third_level/CC";

export default class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:456
        }
    }
    render() {
        return(
            <div>
                <div>
                    <ul>
                        <li>Two</li>
                        <li>Two</li>
                        <li>Two</li>
                        <li>Two</li>
                        <li><Link to='/about/two/aa/1'> 三级路由1</Link></li>
                        <li><Link to='/about/two/bb'> 三级路由2</Link></li>
                        <li><Link to='/about/two/cc'> 三级路由3</Link></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/about/two/aa/:id' exact component={AA}/>
                        <Route path='/about/two/bb' component={BB}/>
                        <Route path='/about/two/cc' component={CC}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
