import React from 'react'
import Greeting from "./greeting/Greeting";
import On from "./on/on";
import Off from "./off/off";

export default class Four extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            arr:["王","郭",'石','鲁','茹','付','刘']
        }
    }
    handleLogoutClick() {
        this.setState({value: false});
    }
    handleLoginClick() {
        this.setState({value: true});
    }
render() {
        let value = this.state.value
        let Button
        if(value) {
            Button = <Off onClick={ () => this.handleLogoutClick()}/>
        }else {
            Button = <On onClick = { () => this.handleLoginClick()}/>
        }
        return(
            <div>
                <Greeting isLoggedIn={value}/>
                {Button}
                {this.state.arr.length && <div>
                    一共{this.state.arr.length}个性,分别是{[...this.state.arr]}
                </div>}
            </div>
        )
}
}
