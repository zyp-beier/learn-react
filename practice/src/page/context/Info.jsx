import React from "react";
import {MyContext} from './name-context'

export default function Info() {

    return (
        <MyContext.Consumer>
            {
                value => {
                    return (
                        <div>
                            <button onClick={value.changeTheme} style={{...value.theme}}>change</button>
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}
