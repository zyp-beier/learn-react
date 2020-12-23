import React, {useState,useEffect} from 'react';
export default function EffectHook() {
    const [study,setStudy] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${study} times`
    })
    return(
        <div>
            <p>You clicked {study} times</p>
            <button onClick={() => setStudy(study + 1)}>
                Click me
            </button>
        </div>
    )
}
