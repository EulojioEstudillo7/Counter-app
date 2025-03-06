function Table(props){

return(

//some code will go in here
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>URL</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Github</td>
            <td>https://github.com</td>
        </tr>
        <tr>
            <td>Google</td>
            <td>https://www.google.com</td>
        </tr>

        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.URL}</td>

        </tr>


    </tbody>





</table>
)



}
export default Table