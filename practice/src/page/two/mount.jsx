import React  from 'react'

class Mount extends React.Component{
    constructor(props) {
        super(props);
        console.log('1.构造函数')
        this.state = {}
        console.log('2.设置状态机')
    }

    static defaultProps = {
        name: 'React'
    }
    componentWillMount() {
        console.log('3.componentWillMount完成首次渲染前调用')
    }
    componentWillReceivePops() {
        console.log('6.父组件更新子组件props时调用改方法')
    }
    shouldComponentUpdate() {
        console.log('7.决定组件props或者state的改变是否需要进行重新渲染')
        return true
    }
    componentWillUpdate() {
        console.log('8.当接收到新的props或state时,调用该方法')
    }
    //添加卸载方法
    delComponent() {
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        console.log('卸载组件')
    }
    render() {
        console.log('4.组件进行渲染')
        return(
            <div>
                {this.props.name}
                <button onClick={this.delComponent}>卸载组件</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('5.componentDidMount组件渲染后的操作')
    }
    componentDidUpdate() {
        console.log('9.组件重新被渲染后，调用该方法')
    }
    componentWillUnmount() {
        console.log('10.组件已经被销毁')
    }


}
export default Mount
