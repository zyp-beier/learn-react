import React from 'react';
import {Button, Card, Progress} from 'element-react'
export default class Two extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            operating:'操作',
            date:new Date(),
            m:0,//分钟
            s:0//秒数
        };
    }
    componentDidMount() {
        this.updateDate = setInterval( () => {
            this.setState({
                date: new Date(),
                m:new Date().getMinutes(),
                s: new Date().getSeconds()
            })
        },1000)
    };
    componentWillMount() {
        clearInterval(this.updateDate)
    }

    render() {
        return(
            <div>
                <Card className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>生命周期</span>
                        <span style={{ "float": "right" }}>
                            <Button type="primary" size='small'>{this.state.operating}</Button>
                        </span>
                    </div>
                }>
                    <Progress type="circle" percentage={this.state.s} />
                    <div>
                        北京时间{this.state.date.toLocaleTimeString()}
                    </div>
                </Card>
            </div>
        )
    }
}
