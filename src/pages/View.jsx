import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const View = () => {

    const navigate = useNavigate();

    const [alldata,setAlldata]  = useState([]);

    const getAllrecord = () => {
        axios.get("http://localhost:3000/crud").then((res)=>{
           setAlldata(res.data);
        })
    }

    const deletedata = (id) => {
        axios.delete(`http://localhost:3000/crud/${id}`).then((res)=>{
            if(res){
                alert("record successfully delete");
                getAllrecord();
            }
        })
    }

    useEffect(()=>{
        getAllrecord();
    },[])

    return (
        <>
            <center>
                 <h1>View page</h1>
                 <button><Link to="/add">Add</Link></button><br></br><br></br>
                <table border={1}>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Action</td>
                    </tr>

                    {
                        alldata.map((val)=>{
                            return (
                                <tr key={val.id}>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        <button onClick={ () => deletedata(val.id) }>Delete</button>
                                        <button><Link to="/edit" state={val.id}>Edit</Link></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </table>
            </center>
                
        </>
    )
}


export default View;