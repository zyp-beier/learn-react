import React from 'react';
import Son from "./son/son";
export default class Eight extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    render() {
        return(
            <div>
                <Son color='pink'>
                    这是子组件的内容，就像插槽一样
                </Son>
            </div>
        )
    }
}
