import React from "react";

// 写法一 (React.createClass写法,es5写法,现在的版本不支持，es6推荐以下写法)
/*const Components  = React.createClass({
    getInitialState() {
        return{
            msg:'单击显示消息'
        }
    },
    componentWillMount() {
        alert('挂载前执行')
    },
    componentDidMount() {
        alert('挂载后执行')
    },
    showMsg() {
        alert('hello,React')
    },
    render() {
        return(
            <div>
                <button onClick={this.showMsg}>{this.state.msg}</button>
            </div>
        )
    }
})*/

// 写法二(React.Component写法)
/*class Components extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg: '点击查看'
        }
    }
    componentWillMount() {
        alert('挂载前执行')
    }
    componentDidMount() {
        alert('挂载后执行')
    }
    showMsg() {
        alert('hello,React')
    }
    render() {
        return(
            <div>
                <button onClick={this.showMsg}>{this.state.msg}</button>
            </div>
        )
    }
}*/

//写法三(无状态函数写法)
const Components = (props) => {
    return(
        <div>
            hello {props.name}
        </div>
    )
}

export default Components
