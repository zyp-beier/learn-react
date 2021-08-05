import React from "react";
import User from "./User";

import {MyContext} from './name-context'

export default class MContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           theme: {
               color: 'red',
               backgroundColor: 'pink'
           }
        }
    }
    render() {
        let {theme} = this.state
        let con = {
            theme,
            changeTheme: () => {
                this.setState({
                    theme:{
                        color: 'green',
                        backgroundColor: 'black'
                    }
                })
            }
        }
        return (
            <MyContext.Provider value={con}>
                <User />
            </MyContext.Provider>
        )
    }
}
