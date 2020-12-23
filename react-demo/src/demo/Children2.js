import React from "react";
import Children2_1 from "./Children2_1";

export default class Children2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        };
        // this.onTemperatureChange = this.onTemperatureChange.bind(this)
    }
    onTemperatureChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        return(
            <div>
                <label htmlFor="子组件表单">
                    {/*<input type="text" value={this.state.value} onChange={this.handleChange}/>*/}
                </label>
                <div>this is 子组件2{this.props.value}</div>
                <input type="text" value={this.props.value} onChange={this.onTemperatureChange.bind(this)}/>
                <div>
                    {this.props.children}
                </div>
                <Children2_1>
                    <div>
                        {this.props.string}
                    </div>
                </Children2_1>
            </div>
        )
    }
}
