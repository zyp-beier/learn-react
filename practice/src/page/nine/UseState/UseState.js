import React,{useState} from 'react'
export default function UserState() {
   const [count,setCount] = useState(0)
    function countChange() {
       setCount(count + 1)
    }
    return(
        <div>
            <p>搞不懂到不懂{count}</p>
            <button onClick={countChange}>{count}</button>
        </div>
    )
}
