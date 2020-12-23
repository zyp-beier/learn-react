import React, {Component} from 'react'
import Child from "../child/Child";
import Brother from "../brother";

class Parent extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    };
    refreshChild() {
        return (e) => {
         this.setState({
             childText:'父组件更新子组件成功'
         })
        }
    }
    refreshParent() {
        this.setState({
            childText: '子组件更新父组件成功'
        })
    }
    changeMsg() {
        this.setState({
            msg: '兄弟组件通信成功'
        })
    }
    render() {
        return(
            <div>
                <div>
                    <button onClick={this.refreshChild()}>父组件更新子组件</button>
                </div>
                <hr/>
                <div>
                    <Child text={this.state.childText || '子组件更新前'} refreshParent={this.refreshParent.bind(this)} changeMsg={this.changeMsg.bind(this)}/>
                </div>
                <hr/>
                <div>
                    <Brother mgs={this.state.msg || '兄弟组件更新前'} />
                </div>
            </div>
        )
    }
}
 export default Parent
