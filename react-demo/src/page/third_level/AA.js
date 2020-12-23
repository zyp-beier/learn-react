import React from "react";
import {Link} from "react-router-dom";

export default class AA extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return(
            <div>
                <div>
                    <ul>
                        <li>AA</li>
                        <li>{this.props.match.params.id}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
