import React from 'react';

export default class Temperature extends React.Component{
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        let {temperature} = this.props
        switch (true) {
            case temperature >= 100 :
                return '水已经沸腾了';
            case temperature < 100 && temperature > 0 :
                return '水温不够';
            default:
                return'水结冰了'
            }
    }
}
