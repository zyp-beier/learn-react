import React from 'react';
import {Card,Button} from 'element-react'
import './one.css'
import ComponentOne from "./componentOne/componentOne";
import ComponentTwo from "./componentTwo/componentTwo";
import ComponentThree from "./componentThree/componentThree";
export default class One extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className='one-wrap'>
                <Card  className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>组件的复用</span>
                        <span style={{ "float": "right" }}>
                            <Button type="primary" size='small'>操作按钮</Button>
                        </span>
                    </div>
                }>
                    <div>
                        <ComponentOne/>
                    </div>
                    <div>
                        <ComponentTwo />
                    </div>
                    <div>
                       <ComponentThree />
                    </div>
                </Card>
            </div>
        )
    }
}
