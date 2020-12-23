import React from 'react'

function Left() {
    return <div>this is left</div>
}

function Right() {
    return <div>this is right</div>
}


function Content(props) {
    return(
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}
function Container() {
    return(
        <Content left={<Left/>} right={<Right/>}/>
    )
}
export default Container
