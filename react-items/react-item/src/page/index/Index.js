import React from 'react';
import Header from '../header/index'
import './index.css'
import Body from '../body/body';
import Footer from '../footer/footer'
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <div><Header/></div>
            <div><Body/></div>
            <div><Footer/></div>
        </div>
    }
}
