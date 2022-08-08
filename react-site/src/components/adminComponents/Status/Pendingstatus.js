import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import  "./pendingstatus.scss"
import { Link } from "react-router-dom";





const Pendingstatus =(props) => {
    const { id, name, email, dob, phone, image,status} = props.riders;
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        loadRider();
  }, [])

  const deleteRider = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/riderList/${id}`);

    loadRider();
};

    const loadRider = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/riderList")
        result = await result.json();
        setRiders(result);
  }
   
    // useEffect(()=>{
    //     axios.get("http://127.0.0.1:8000/api/riderstatus")
    //     .then(resp=>{
    //         console.log(resp.data);
    //         setRiders(resp.data);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // },[]);

    return (

  <div>
    
  </div>

    )
}

export default Pendingstatus;