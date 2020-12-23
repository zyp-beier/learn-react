import React, {useEffect, useState} from "react";

export function Example() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('请输入')
    useEffect(() => {
        document.title =  `You clicked ${count} times`;
        const int = setInterval(() => {
            console.log(1)
        },1000)
        return () =>{
            clearInterval(int)
        }
    })
    useEffect(() => {
        console.log('input改动了')
    },[input,count])
    function inputChange(event) {
        setInput(event.target.value)
    }
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => {setCount(count - 1)}}>
                -
            </button>
            <input type="text" value={input} onChange={inputChange}/>
        </div>
    )
}

export class Exanole2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            int: null
        }
    }

    componentDidMount() {
        document.title = `${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `${this.state.count} change`
    }
    componentWillUnmount() {

    }

    render() {
        return(
            <div>
                <p>you clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count:this.state.count + 1})}>+</button>
            </div>
        )
    }

}
