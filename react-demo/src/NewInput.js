import React from 'react'

function InputOne(props) {
        return <div>{props.text}</div>
}
function InputTwo(props) {
    return <div>{props.text}</div>
}
class InputThree extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text_one: 'one',
            text_two: 'two'
        }
    }
           render(){
            return(
                <div>
                    <div>
                        { <InputOne text={this.state.text_one}/>}
                    </div>
                    <div>
                        {<InputTwo text={this.state.text_two}/>}
                    </div>
                </div>
            )
        }
}

export default InputThree
