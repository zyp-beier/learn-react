import React from 'react'

class JSX extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'true'
        }
    }
    render() {
        const list = [
            <li key={1}>react</li>,
            <li key={2}>vue</li>,
            <li key={3}>angular</li>
        ]
        const style={
            listStyle: 'none',
            width:500,
            height:200,
        }
        let html = null
        if(this.state.name){
            html = <button>完成操作</button>
        }else{
            html = <div>
                <div>列表</div>
                <div>列表</div>
                <div>列表</div>
            </div>
        }
        return(
            <div>
                <ul style={style}>
                    {list}
                </ul>
                <div style={{color: 'red'}}>
                    color:red
                </div>
                <div>
                    三目运算符{this.state.name? this.state.name: 'hello'}
                </div>
                <div>
                    {html}
                </div>
            </div>
        )
    }
}

export default JSX
