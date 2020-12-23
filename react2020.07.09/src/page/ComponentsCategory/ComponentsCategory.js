import React from "react";

class ComponentsCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res: []
        }
    }

    componentDidMount() {
        this.request()
    }
    request() {
        let _this = this
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText).data
                _this.setState({
                    res:data
                })
            }
        };
        request.open('GET', './mock/data.json')
        request.send()
    }
    render() {
        const style = {
            listStyle: 'none',
            display: 'flex'
        }
        return (
            <div>
                <ul style={style}>
                    {this.state.res.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default ComponentsCategory
