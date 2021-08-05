import React from 'react';
import { Card} from 'element-react'
import Temperature from "./temperature/temperature";
import TemperatureInput from "./TemperatureInput/TemperatureInput";

export default class Seven extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            temperature: -1,
            scale: 'c'
        };
    }
    handleChangeC = (e) => {
        this.setState({
            temperature:e,
            scale: 'c'
        })
    }
    handleChangeF = (e) => {
        this.setState({
            temperature:e,
            scale: 'f'
        })
    }
    render() {
        let {temperature, scale} = this.state
        let c_temperature = scale === 'c' ? temperature : temperature / 2
        let f_temperature = scale === 'f' ? temperature : temperature * 2
        return(
            <div>
                <Card className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>状态提升</span>
                    </div>
                }>
                    <div>
                        <TemperatureInput scale='c'  temperature={c_temperature} onTemperatureChange={this.handleChangeC} />
                        <TemperatureInput scale='f'  temperature={f_temperature} onTemperatureChange={this.handleChangeF} />
                    </div>
                    <Temperature temperature={this.state.temperature}/>
                </Card>
            </div>
        )
    }
}
