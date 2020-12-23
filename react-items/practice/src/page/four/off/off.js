import React from 'react'

export default class Off extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <button onClick={this.props.onClick}>退出</button>
            </div>
        )
    }
}
