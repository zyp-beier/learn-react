import React from 'react';
import {Button, Card} from 'element-react'
import Temperature from "./temperature/temperature";
import TemperatureInput from "./TemperatureInput/TemperatureInput";
export default class Seven extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            operating:'按钮',
            temperature: '',
            scale: 'c'
        };
        this.valueChange = this.valueChange.bind(this)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }
    valueChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }
    handleCelsiusChange() {

    }
    handleFahrenheitChange() {

    }
    render() {

        return(
            <div>
                <Card className="box-card" header={
                    <div className="clearfix">
                        <span style={{ "lineHeight": "36px" }}>状态提升</span>
                        <span style={{ "float": "right" }}>
                            <Button type="primary" size='small'>{this.state.operating}</Button>
                        </span>
                    </div>
                }>
                    <div>
                        <div>
                            <input type="text" value={this.state.temperature} onChange={this.valueChange}/>
                        </div>
                        <Temperature temperature={this.state.temperature}/>
                    </div>

                    <div>
                        F&&C
                        <div>
                            {/*<TemperatureInput scale='c'   temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />*/}
                            {/*<TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>*/}
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
