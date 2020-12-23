import React from 'react';
import './son.css'
export default class Son extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    render() {
        return(
            <div className={'title  FancyBorder-' + this.props.color }>
                {this.props.children}
            </div>
        )
    }
}
