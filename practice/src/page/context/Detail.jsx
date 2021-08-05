import React from "react";
import {MyContext} from "./name-context";

export default class Detail extends React.Component {
    static contextType = MyContext

    render() {
        let {theme} = this.context
        return(
           <div>
               <div style={{...theme}}>字体</div>
           </div>
        )
    }
}
