"use client"
import Form from "./Components/form"
import Table from "./Components/table"
import {useState} from "react"
function HomePage(){

    
    return (
        <div>
            <h1>FavLinks</h1>
       <Form />
       <Table/>
        </div>
    )
}

export default HomePage
// const[count, setCount] = useState(0)
/* <h1>  Counter: {count}</h1>
            <button onClick = {()=>{
                //write some javascript for this function
                setCount(count + 1)
            }}>Add One</button> */
