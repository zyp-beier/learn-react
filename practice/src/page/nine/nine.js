import React from 'react';
import {Tabs} from 'element-react'
import './nine.css'
import UseState from "./UseState/UseState";
import {Link, Route, Switch} from "react-router-dom";
import EffectHook from "./EffectHook/EffectHook";


// function Nine() {
//     const [count, setCount] = useState(0);
//     const [number,setNumber]= useState(0);
//     const [hello,setHello] = useState('hello')
//
//     function handleChange(){
//         setNumber(number + 2);
//         setHello('hi')
//     }
//     return (
//         <div>
//             <p>You clicked {count} times {hello}</p>
//             <button onClick={() => setCount(count + 1)}>{count}</button>
//             <button onClick={handleChange}> {number}</button>
//         </div>);
// }


//状态不改变，
export default class Nine extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            items:[
                {
                    title:'useState',
                    id:1
                },
                {
                    title:'EffectHook',
                    id:2
                },
                {
                    title:'3',
                    id:3
                },
                {
                    title:'4',
                    id:4
                }
            ]
        }
    }
    render() {
        return(
            <div>
                <ul className='nine-ul'>
                    {this.state.items.map((item) => {
                       return <Link to={`/nine/${item.id}`} className='nine-li'><li key={item.id} >{item.title}</li></Link>
                    })}
                </ul>
                <div>
                    <Switch>
                        <Route path='/nine/1' exact component={UseState} />
                        <Route path='/nine/2' component={EffectHook} />
                        <Route path='/nine/3' component={UseState} />
                        <Route path='/nine/4' component={UseState} />
                    </Switch>
                </div>
            </div>
        )
    }
}
