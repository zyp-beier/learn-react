import React from "react";
import Children from "./Children";
import Children2 from "./Children2";

class Components extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:'扽等'
        };
        this.handleChange = this.handleChange.bind(this)
        // this.onTemperatureChange = this.onTemperatureChange.bind(this)
}
    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    };
    onTemperatureChange(value) {
        console.log(value)
        this.setState({
            name:value
        })
    }

render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <Children name={this.state.name}>
                    <h1>这是什么啊</h1>
                </Children>
                <Children2 value={this.state.name} string="这是一串字符串" onTemperatureChange={this.onTemperatureChange.bind(this)}>
                    <h2>组件2</h2>
                </Children2>
            </div>
        )
}
}

// setInterval(Components,1000)
export default Components
