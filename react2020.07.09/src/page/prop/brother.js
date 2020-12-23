import React, {Component} from 'react'

class Brother extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <div>
                    {this.props.mgs}
                </div>
            </div>
        )
    }
}

export default Brother
