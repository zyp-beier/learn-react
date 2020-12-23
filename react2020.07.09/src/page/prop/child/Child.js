import React, {Component} from 'react'

class Child extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <div>
                    {this.props.text}
                </div>
                <div>
                    <button onClick={this.props.refreshParent}>更新父组件</button>
                </div>
                <div>
                    <button onClick={this.props.changeMsg}>联系兄弟组件</button>
                </div>
            </div>
        )
    }
}

export default Child
