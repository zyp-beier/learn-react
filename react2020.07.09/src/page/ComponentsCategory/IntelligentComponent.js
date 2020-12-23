import React from "react";
import PuppetComponent from "./PuppetComponent";

class IntelligentComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const request = new XMLHttpRequest()
        request.onreadystatechange =  () =>  {
            if ( request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText).data
                this.setState({
                    data
                })
            }
        }
        request.open('GET','./mock/data.json')
        request.send()
    }

    render() {
        return (
            <div>
                <PuppetComponent data={this.state.data || []}/>
            </div>
        );
    }
}
export default IntelligentComponent
