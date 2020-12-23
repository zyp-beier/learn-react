import * as React from "react";
import Son from "./Son";
import {Link,Route, BrowserRouter as Router,Switch} from "react-router-dom";
import Input from "../input";
import Thermometer from "../Thermometer";
import NewInput from "../NewInput";
import Demo from "../demo";



export default class Parent extends React.Component{
    constructor() {
        super()
        this.state={
            value:'hahahhahhahhahahhaha'
        }
    }
    handleChange(value) {
        this.setState({
            value
        })
    }
    assignmentTwo(value) {
        console.log(value)
    }
    render() {
        return(
            <div>
                {this.state.value}
                <div>
                    <h1>一级导航</h1>
                    <Router>
                    <div>
                        <ul>
                            <li><Link to='/lb'>李白</Link></li>
                            <li><Link to='/df'>杜甫</Link></li>
                            <li><Link to='/lsy'>李商尹</Link></li>
                        </ul>
                    </div>
                        <Switch>
                            <Route path='/lb' component={Input} />
                            <Route path='/df' component={NewInput} />
                            <Route path='/lsy' component={Demo} />
                        </Switch>
                    </Router>
                    <Son handleChange={this.handleChange.bind(this)} assignmentTwo={this.assignmentTwo(this)}>
                        <span>数组</span>
                    </Son>
                </div>
            </div>
        )
    }
}
