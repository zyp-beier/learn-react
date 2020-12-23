import React from 'react';

class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date:new Date()
        }
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        setInterval(
             this.tick,1000)
    }
  tick() {
        this.setState({
            date: new Date()
        })
}
    render() {
        return(
            <div>
                <h1 >hello,world</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Demo
