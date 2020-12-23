import React from "react";
import './index.css'
import Parent from "../prop/parent/Parent";
class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isRed:true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState((prevState,props) => ({
            isRed: !prevState.isRed
        }))
    }
    render() {
        var redStyle = {
            color: 'red'
        }
        var blueStyle = {
            color: 'blue'
        }
        return(
            <div>
                <h1 style={this.state.isRed? redStyle: blueStyle}>这是红色的标题</h1>
                <button onClick={this.handleClick}>点击改变颜色</button>
                <div className={'entry'} id={'ripe'}><div></div></div>
                <div>
                    <Parent />
                </div>
            </div>
        )
    }
}

export default Index;
