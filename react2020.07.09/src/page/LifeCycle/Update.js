import React, {Component} from 'react'
import Mount from "./Mount";


class Update extends Component{
    constructor(props) {
        super(props);
        this.updateChildprops = this.updateChildprops.bind(this)
        this.state={
            name: 'React'
        }
    }
    updateChildprops() { //更新父组件
        this.setState({
            name: 'Vue'
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.updateChildprops}>更新子组件</button>
                <Mount name={this.state.name}/>
            </div>
        )
    }
}
export default Update
