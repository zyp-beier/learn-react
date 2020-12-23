import React, { Component } from 'react'
import Header from '../Header/Header'
import Index from '../Index/Index'
import Main from '../Main/Main'
import Tab from '../Tab/Tab'


export default class Layout extends Component {
    constructor() {
        super()
        this.state = {
    
        }
    }
    render() {
        const {selectedTab} = this.state
        return (
            <div style={{width: '100%'}}>
                <Header></Header>
                <Index></Index>
                {/* <Main></Main> */}
                <Tab ></Tab>
            </div>
        )
    }
}