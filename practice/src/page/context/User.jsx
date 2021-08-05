import React from "react";
import Detail from "./Detail";
import Info from "./Info"


export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div>
                    <Detail />
                    <Info />
                </div>
        )
    }
}

