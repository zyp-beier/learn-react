import React from "react";

class PuppetComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default PuppetComponent
