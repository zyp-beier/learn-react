import  React from "react";
import {Link, NavLink} from "react-router-dom";
import {Route, Router} from "react-router";

export default  class Son extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            value: null,
            psd: null
        };
    }
    handleChange(e) {
        this.props.handleChange(e.target.value)
    };
     assignmentOne(e) {
        this.setState({
            value:e.target.value
        })
    };
    assignmentTwo(e){
        this.props.assignmentTwo(e.target.value)
    }
    handleClick() {
        this.refs.dome.blur ()
    }
    componentDidMount() {
        this.refs.dome.focus()
    }
    render(){
        return(
            <div>
                {/*<div>*/}
                {/*    <input type="text" value={this.props.value} onChange={this.handleChange.bind(this)}/>*/}
                {/*</div>*/}
                {/*{this.state.value}*/}
                {/*<div>*/}
                {/*    <input type="text" value={this.state.value} onChange={this.assignmentOne.bind(this)}/>*/}
                {/*</div>*/}
                <div>
                    <input type="text" value={this.state.psd} onChange={this.assignmentTwo.bind(this)}/>
                </div>
                <div>
                    {React.Children.map(this.props.children, child => {
                        return <li>child</li>
                    })
                    }
                </div>               
                <div>
                    <div>
                        <input type="text" ref="dome"/>
                    </div>
                    <div>
                        <button onClick={this.handleClick.bind(this)}>点击处理dom事件</button>
                    </div>
                </div>
            </div>
        )
    }
}
