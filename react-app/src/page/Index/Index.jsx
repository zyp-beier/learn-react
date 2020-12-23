import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

export default class Index extends Component {
    render() {
        return (
            <div>
                index page
                <Parent parentContetn='我是父组件的内容'></Parent>
            </div>
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props)
        console.log('父组件props',props);
        this.state = {

        }
    }
    childContent(parm) {
        console.log(parm)
    }
    render() {
        const {childText,childcon} = this.state
         return (
            <Fragment>
                <div>{this.props.parentContetn}</div>
                <div>
                    {childText ? childText: '空空如也'}
                    {childcon ? childcon: '空空如也'}
                </div>
                <Child getChildContent={this.childContent} childcon='我是子组件的props'></Child>
            </Fragment>
        )
    }
}

class Child extends Component {
    constructor(props) {
        super(props)
        console.log('子组件props',props);
        this.state = {
            childText: '我是子组件的state.childText',
            count: 0
        }
    }

    handChild = () => {
        const {getChildContent, childcon} = this.props
        const {childText} = this.state
        let data = {
            childText,
            childcon
        }
        getChildContent(data)
    }
    add = () => {
        // this.setState({
        //     count:this.state.count + 1
        // })
        // setTimeout(() => {
        //     console.log('+',this.state.count)
        // },10)
        this.setState((state) => ({
            count: state.count + 1
        }))
        console.log('+',this.state.count)
    }
    subtract = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count - 1 
            })
            console.log('-', this.state.count)
        },10)
    }
    render() {
        return(
            <div>
                <button onClick={ this.handChild }>{this.props.childcon}</button>
                <div>setState()异步</div>
                <div>
                    <button onClick={this.add}>+</button>
                    <div>{this.state.count}</div>
                    <button onClick={this.subtract}>-</button>
                </div>
                <div style={{borderTop:'1px solid red'}}>
                    <div>{this.state.childText}</div>
                </div>
            </div>            
        )
    }
}

//prop类型检查
Child.propTypes = {
    childcon:propTypes.string,
    getChildContent:propTypes.func
}