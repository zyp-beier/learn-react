import React from "react";
// import chirdren from

class Children extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '赵嘉萌',
            date: new Date(),
            psd: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
}
    handleChange(event) {
      const name= event.target.name;
      console.log(name)
      this.setState({
        [name]: event.target.value
    });
    }
    handleChange1(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    handleSubmit(event) {
        console.log(event)
    }
    render() {
        return(
            <div>
                this is {this.state.name}
                时间:{this.state.date.toLocaleTimeString()}
                <div>
                    子组件:{this.props.name}
                </div>
                <form action="" onSubmit={Children.handleSubmit}>
                    <label htmlFor="姓名">
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </label>
                    <label htmlFor="密码">
                        <input type="password" value={this.state.psd} onChange={this.handleChange} name="psd"/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
                <input type="text" value={this.props.name} onChange={this.handleChange1}/>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
export default Children
