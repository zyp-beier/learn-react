import React from "react";
import {Link,Route, BrowserRouter as Router,Switch} from "react-router-dom";
import Son from "./Son";
export default class Parent extends React.Component{
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
                        <Route path='/lb' children={() => <div>李白</div>} />
                        <Route path='/df' children={() => <div>杜甫</div>} />
                        <Route path='/lsy' children={() => <div>李商隐</div>} />
                    </Switch>
                </Router>
                <Son handleChange={this.handleChange.bind(this)} assignmentTwo={this.assignmentTwo(this)}>
                    <span>数组</span>
                </Son> 
            </div>
        )
    }
}
