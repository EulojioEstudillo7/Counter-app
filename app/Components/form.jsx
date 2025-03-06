import {useState} from 'react'



function Form(props){
    //state - a way for us to set and reference data that changes in our components
    
     const [name, setName] = useState("")
     const [URL, setURL] = useState("")

    function handleClick(){
        //we can use the event object to look at our input
        //console.log(name,URL)

        props.submitFavLink({name,URL})
    //alert the parent component to pass some data as props to the table
    //take the last value of the input and send it to the table
    }
    
    

    function handleNameInputChange(event){
       console.log(event.target.value)
       
        //save this data for later

        setName(event.target.value)
    }

    function handleURLInputChange(event){
        console.log(event.target.value)
        
         //save this data for later
        setURL(event.target.value)
     
     }
    


    return(
        <div>
            {/* {Form for the user to input data} */}
            <form>
                <label>  Name</label>
                <input type="text" onChange ={handleNameInputChange} />
                <label>URL</label>

                <input type="text" onChange ={handleURLInputChange} />
            
            </form>
            <button onClick = {handleClick}>Submit</button>
     {/* {A table the user can use to see their submissions} */}
        </div>
    )
}
export default Form