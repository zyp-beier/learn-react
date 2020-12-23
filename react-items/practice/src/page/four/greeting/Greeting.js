import React from 'react'
import Login from "../login/login";
import Logout from "../logout/logout";
export default class Greeting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // isLoggedIn:false
        }
    }
    render() {
        let isLoggedIn = this.props.isLoggedIn
        if(isLoggedIn) {
            return <Login />
        }
        return <Logout />
 }
}
