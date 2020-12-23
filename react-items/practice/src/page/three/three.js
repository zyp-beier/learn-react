import React from 'react';
import {Button, Card} from 'element-react'
export default class Three extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            operating:'操作'
        };
    }
    handleClick= () => {
        console.log(this)
    };
    handleClickOne() {
        console.log(this)
    }
    render() {
        return(
            <div>
                <Card className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>事件处理</span>
                        <span style={{ "float": "right" }}>
                            <Button type="primary" size='small'>{this.state.operating}</Button>
                        </span>
                    </div>
                }>

                    <div>
                            <div onClick={this.handleClick}>实验性语法</div>
                            <div onClick={()=> this.handleClickOne()}>箭头函数（不推荐）</div>
                    </div>
                    <div>
                        <div>传参</div>
                        <div>
                            {/*<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>*/}
                            {/*<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>*/}
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
