import React from 'react';
const scaleNames = {
    c: '摄氏度',
    f: '华氏度'
};
export default class TemperatureInput extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        };
       this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        // this.setState({
        //     temperature: e.target.value
        // });
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>温度是 {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        )
    }
}
