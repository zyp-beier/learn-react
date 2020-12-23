import React from 'react';

export default class ComponentTwo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number:2
        }
    }

    render() {
        return(
            <div>
                这是组件{this.state.number}
            </div>
        )
    }
}
