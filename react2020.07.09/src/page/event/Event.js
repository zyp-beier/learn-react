import React, {Component} from 'react'

class Event extends Component{
    constructor(props) {
        super();
        this.state = {
            name: 'zhao'
        }
        this.constr = this.constr.bind(this)
    }
    event(){
        console.log('event',this)
    }
    constr() {
        console.log('构造函数',this)
    }
    render() {
        return(
            <div>
                <button onClick={this.event}>事件绑定</button>
                <button onClick={this.constr}>构造函数绑定事件</button>
            </div>
        )
    }
}
export default Event
