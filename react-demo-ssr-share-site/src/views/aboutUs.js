import React from 'react'
import {info} from "../utils/utils";

export default class AboutUs extends React.Component {
    constructor(props){
        super(props);
        info('init about us')
    }

    render() {
        return <div>
            About us
        </div>
    }
}
