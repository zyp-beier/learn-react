import React from "react";

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: 'zhao'
        };
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        this.setState({
            id:this.props.match.params.id
        })
    }

    render() {
        return(
            <div>
                <div>
                    <ul>
                        <li>产品</li>
                        <li>产品</li>
                        <li>产品</li>
                        <li>产品</li>
                        <li>产品</li>
                        <li>{this.state.id}</li>
                        {this.state.name}
                        {this.props.match.params.id}
                    </ul>
                </div>
            </div>
        )
    }
}
