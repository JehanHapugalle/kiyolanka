import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './Materialreport.css'
import Logo from './image/logo.jpeg'


export default function Materialused(){

    const [Materials, setusedamount] = useState([]);

    useEffect(() => {
        function getusedamount(){
            axios.get("http://localhost:4000/material/").then ((res) => {
                setmaterials(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getmaterials();
    }, [])


}