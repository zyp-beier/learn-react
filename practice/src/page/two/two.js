import React from 'react';
import {Button, Card, Progress} from 'element-react'
import Mount from "./mount";
export default class Two extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            operating:'操作',
            date:new Date(),
            m:0, // 分钟
            s:0, // 秒数
            name: 'react'
        };
    }
    componentDidMount() {
        // this.updateDate = setInterval( () => {
        //     this.setState({
        //         date: new Date(),
        //         m:new Date().getMinutes(),
        //         s: new Date().getSeconds()
        //     })
        // },1000)
    };
    componentWillMount() {
        clearInterval(this.updateDate)
    }
    updateChildprops = () => { //更新父组件
        this.setState({
            name: 'Vue'
        })
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
                    <hr />
                    <div>
                        <button onClick={this.updateChildprops}>更新子组件</button>
                        <Mount name={this.state.name}/>
                    </div>
                </Card>
            </div>
        )
    }
}
