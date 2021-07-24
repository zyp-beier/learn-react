import React from "react";

class SetState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLinked: true,
            count: 0
        }
    }
    componentDidMount() {
        this.setState(function (state) {
            console.log('第一次setState后的count值：' + state.count)
            return{
                count: state.count+1
            }

        })
        this.setState(function (state) {
            console.log('第二次setState后的count值：' + state.count)
            return{
                count: state.count+1
            }

        })
        this.setState(function (state) {
            console.log('第三次setState后的count值：' + state.count)
            return{
                count: state.count+1
            }

        })
        console.log('setState后立即显示state的值为' + this.state.count)
    }

    change = () => {
        console.log(this.state.isLinked)
        this.setState({
            isLinked: !this.state.isLinked
        })
        console.log(this.state.isLinked)
    }
    changeCount = () => {
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.change}>{this.state.isLinked? '取消':'点赞'}</button>
                </div>
                <div>
                    <button onClick={this.changeCount}>显示当前state的值{this.state.count}</button>
                </div>
            </div>
        );
    }

}

export default SetState
