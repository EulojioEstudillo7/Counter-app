"use client"
import Form from "./Components/form"
import Table from "./Components/table"
import {useState} from "react"
function HomePage(){

    const [newFavLink, setNewFavLink] = useState({})

    function handleNewFavLink(favLink){

        console.log(favLink,"in HomePage")

        setNewFavLink(favLink)
    }
    return (
        <div>
            <h1>FavLinks</h1>
       <Form submitFavLink = {handleNewFavLink}/>


       <Table data = {newFavLink}/>
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
