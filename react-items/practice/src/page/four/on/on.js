import React from 'react'

export default class On extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <button onClick={this.props.onClick}>登录</button>
            </div>
        )
    }
}
