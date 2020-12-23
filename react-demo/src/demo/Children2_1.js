import  React from "react";

export default class Children2_1 extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }

    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
