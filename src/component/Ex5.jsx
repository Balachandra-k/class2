import React from "react";
import{ useState} from 'react'
import Ex1 from './Ex1';

function Ex5 (props){
    const[num,setNum] = useState(0)

    const addOne = ( )=>{
        setNum(num+1)
    }
    return (
        <div>
            <h3>state and handler</h3>
            <h1>Number = { num}</h1>
            <button onClick={() => addOne()}>ADD + 1</button>
        </div>
    )
}
export default Ex5