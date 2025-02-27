"use client"

import {useState} from "react"
function HomePage(){

    const[count, setCount] = useState(0)
    return (
        <div>
            <h1>  Counter: {count}</h1>
            <button onClick = {()=>{
                //write some javascript for this function
                setCount(count + 1)
            }}>Add One</button>

        </div>
    )
}

export default HomePage