import React from 'react'
import './Thermometer.css';


function Chirden(props) {

   if(props.number>100){
       return <div>沸腾</div>
   }
   return <div>未达沸点</div>
}
class Thermometer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            number: ''
        };
        this.change = this.change.bind(this)
    }

    change(e) {
        // console.log(e.target.value)
        this.setState({
            number:e.target.value
        })
    }
    render() {
        return(
            <div>
                <form>
                    {/*<input type="text" value={this.state.number} onChange={this.change}/>*/}
                    <input value={this.state.number} onChange={this.change} />
                    <Chirden number={this.state.number}/>
                </form>
            </div>
        )
    }
}
class New extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            value: ''
        }
    }
    render() {
        return(
            <div>
                <form action="">
                    <input type="text" value={this.state.value}/>
                </form>
            </div>
        )
    }
}
export default Thermometer
