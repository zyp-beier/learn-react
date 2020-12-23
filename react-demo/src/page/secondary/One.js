import React from "react";

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <div>
                <div>
                    <ul>
                        <li>二级路由one</li>
                        <li>二级路由one</li>
                        <li>二级路由one</li>
                        <li>二级路由one</li>
                        <li>二级路由one</li>
                        <li>二级路由one</li>
                    </ul>
                    {this.props.match.params.gid}
                </div>
            </div>
        )
    }
}
