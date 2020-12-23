import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'antd-mobile'
import {ButtonA, ButtonB, BackgroundImg, Input} from './purchased.js'

export default class Purchased extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: []
        }
    }
    componentDidMount() {
        // axios.get('/api/purchased.json').then( (res) => {
        //     console.log(res);
        //     const {courseList} = res.data
        //     this.setState({
        //         courseList
        //     })
        // }).catch(err => {
        //     console.log(err);
        // })
        fetch('/api/purchased.json')
        .then(res =>  res.json())
        .then(result => {
            const {courseList} = result
            this.setState({
                courseList
            })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        const {courseList} = this.state
        return (
            <div>
                <div className="course-wrap">
                    { courseList.map(item => {
                        const {id,name} = item
                            return <div key={id}>
                                <div>
                                    <ButtonB>{id}</ButtonB> <ButtonA color='red'>{name}</ButtonA>
                                </div>
                            </div>
                        })
                        }
                </div>
                <div>
                    <BackgroundImg>img</BackgroundImg>
                </div>
                <div>
                    <Input width="200px" height='30px' placeholder="请输入账号"></Input>
                    <Input width="200px" height='30px' placeholder="请输入密码" type="password"></Input>
                </div>
            </div>
        )
    }
}
