import React from 'react';
 export default class ComponentOne extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
            number:1
         }
     }
render() {
         return(
             <div>
                 这是组件{this.state.number}
             </div>
         )
}
 }
