import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();

    const [editinput,setEditiput] = useState({
        name : '',
        email : '',
        password : ''
    })
    const [editid,setEditid] = useState(false);

    let location = useLocation();
    let id = location.state;

    const getSingleRecord = () => {
        axios.get(`http://localhost:3000/crud/${id}`).then((res)=>{
            setEditiput(res.data)
        })
        setEditid(id);
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setEditiput({
            ...editinput,[name] : value
        })
    }

    const edit = () => {
        axios.put(`http://localhost:3000/crud/${editid}`,{
            name : editinput.name,
            email : editinput.email,
            password : editinput.password
        }).then((res)=>{
            if(res){
                alert("record sucessfully update");
                navigate('/');
            }
        })
    }

    useEffect(()=>{
        getSingleRecord();
    },[])

    return (
        <center>
            <h1>Edit page</h1>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td><input type="text" name="name" onChange={ (e) => handleChange(e) } value={editinput.name} /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="text" name="email" onChange={ (e) => handleChange(e) } value={editinput.email} /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" name="password" onChange={ (e) => handleChange(e) } value={editinput.password} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="button" onClick={ () => edit() } value="Edit"/></td>
                </tr>
            </table>
        </center>
            
    )
}


export default Edit;