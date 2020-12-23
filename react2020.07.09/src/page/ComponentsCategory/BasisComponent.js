import React from "react";

class BasisComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        name: '默认的'
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div style={{width:200 ,height:200,border: '1px solid #ccc'}}>
                <div>普通组件</div>
                <div>
                    hello {this.props.name}
                </div>
                <div>
                    {this.props.type}
                </div>
            </div>
        )
    }
}
export default BasisComponent
