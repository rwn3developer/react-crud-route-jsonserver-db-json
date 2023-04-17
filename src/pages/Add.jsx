import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();

    const [input,setInput] = useState({
        name : '',
        email : '',
        password : '',
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input,[name] : value
        })
    }

    const save = () => {
        const {name,email,password} = input;
        axios.post("http://localhost:3000/crud",{
            name : name,
            email : email,
            password : password
        }).then((res)=>{
            if(res){
                alert("record successfully add");
                navigate('/');
            }
        })
    }

    return (
        <center>
        <h1>Add page</h1>
        <table border={1}>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name" onChange={ (e) => handleChange(e) } value={input.name} /></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" name="email" onChange={ (e) => handleChange(e) } value={input.email} /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" name="password" onChange={ (e) => handleChange(e) } value={input.password} /></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" onClick={ () => save() } value="submit"/></td>
            </tr>
        </table>
    </center>
    )
}

export default Add;