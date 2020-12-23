import React from 'react';
import {Button, Card} from 'element-react'
export default class Five extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            operating:'按钮',
            students:[
                {
                    name:'赵银萍',
                    age:21,
                    job:'前端开发',
                    id:'001'
                },
                {
                    name:'郭腾跃',
                    age:20,
                    job:'安卓开发',
                    id:'002'
                },
                {
                    name:'祝腾飞',
                    age:22,
                    job:'网络安全',
                    id:'003'
                },
            ]
        };
    }

    render() {
        return(
            <div>
                <Card className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>列表渲染</span>
                        <span style={{ "float": "right" }}>
                            <Button type="primary" size='small'>{this.state.operating}</Button>
                        </span>
                    </div>
                }>
                <div>
                    欢迎以下获得学院信息技术奖同学上台领奖
                    {this.state.students.map((student,index) => {
                        return <li key={student.id}>{student.name}-{index}</li>
                    })}
                </div>
                </Card>
            </div>
        )
    }
}
