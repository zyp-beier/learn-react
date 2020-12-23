import React from 'react';
import {Button, Card} from 'element-react'
export default class Six extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            operating:'按钮',
            name: '',
            clear: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.checkChange = this.checkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event) {
        alert('你的名字是: ' + this.state.name);
        event.preventDefault();//不知道干嘛的
    }
    clearName() {
        let value = this.state.clear
        if(value) {
            this.setState({
                name: ''
            })
        }
    }
    checkChange(event) {
        let clear = event.target.checked
        this.setState({
            clear
        })
    }
    render() {
        return(
            <div>
                <Card className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>表单</span>
                        <span style={{ "float": "right" }}>
                            <Button type="primary" size='small'>{this.state.operating}</Button>
                        </span>
                    </div>
                }>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">
                            姓名:
                            <input type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            <input type="checkbox" checked={this.state.clear} onChange={this.checkChange}/>
                        </label>
                        <input type="submit" value='提交'/>
                        <input type="button" value='清除' onClick={() => this.clearName()}/>
                    </form>


                </Card>
            </div>
        )
    }
}
