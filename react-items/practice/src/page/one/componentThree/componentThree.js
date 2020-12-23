import React from 'react';
import ComponentOne from "../componentOne/componentOne";
import ComponentTwo from "../componentTwo/componentTwo";
export default class ComponentThree extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number:3
        }
    }
    render() {
        return(
            <div>
                <ComponentOne/>and<ComponentTwo />
            </div>
        )
    }
}
