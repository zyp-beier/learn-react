import React from "react";
import BasisComponent from "./BasisComponent";
 //属性代理
const HOC = (BasisComponent) => {
   return  class HigherOrderComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                type: '处理函数'
            }
        }

        render() {
            const newProps = {
                name: '给你我的值，HOC'
            };
            return <BasisComponent  {...newProps} {...this.state}/>
        }
    }
};
const NewComponent = HOC(BasisComponent)
export default NewComponent
