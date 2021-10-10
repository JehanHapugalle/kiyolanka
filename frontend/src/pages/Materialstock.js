import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './Materialstock.css';
import Logo from './image/logo.jpeg'

export default function Materialstock(){

    const [Materials, setmaterials] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        function getmaterials(){
            axios.get("http://localhost:4000/material/").then ((res) => {
                setmaterials(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getmaterials();
    }, [])

    const updateMaterial = (_id) => { 
        const mid =prompt("Enter New ID: ")
        if (mid == null){
            return;
        }
        
        const type = prompt("Enter New Type: ")
        if (type === null) {
            return; 
        }
        const uprice = prompt("Enter New Price: ")
        if (uprice === null) {
            return; 
        }
        const date_received = prompt("Enter New date: ")
        if (date_received === null) {
            return; 
        }
        const receivedamount = prompt("Enter New ammount: ")
        if (receivedamount === null) {
            return; 
        }

        axios.put(`http://localhost:4000/material/update/${_id}`, 
            {
                mid: mid,
                type : type,
                uprice : uprice,
                date_received : date_received,
                receivedamount : receivedamount,
                _id : _id
            }).then (() => {
                alert("Material Updated")
                setmaterials(Materials.map((val) => {
                    return val._id == _id ? {
                        _id : _id,
                        mid:mid,
                        type : type,
                        uprice : uprice,
                        date_received : date_received,
                        receivedamount : receivedamount,
                    } : val;
                }))
            })
    };

    function ConfirmDelete(id)
    {
        var x = window.confirm("Are you sure you want to delete this Material?");
        if (x)
            deleteMaterial(id);
        else
            return;
    } 


    const deleteMaterial = (_id) => {
        axios.delete(`http://localhost:4000/material/delete/${_id}`).then ((res) => {
            alert("Material Deleted")
            setmaterials(
                Materials.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
        })
    }

    return(
            
        <div className="container">
        <div class="image1">
        <img src={Logo}width="150" alt="logo"/>
        </div>
            <div class="employeelist">
        
                <h1>Material Managment</h1>
            </div>
            
            <div class="retrieve">
                <h2>Material stock</h2>
            </div>

            <div className="list" style={{width: "45%"}}>

                <div>
                    <input 
                        mid="text"
                        type = "text" 
                        class = "search" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                    <table>

                <tr className = "Matrow">

                <th>ID</th>

                <th>Type</th>

                <th>Price</th>

                <th>Date</th>

                <th>Amount</th>


                </tr>

                </table>
  <div class="Matvor">
                        {Materials.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.type.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.uprice.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.date_received.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.receivedamount.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } 
                    }).map((val, key) => {
                        return(
                            <div className = "displayContainer" style={{width: "100%"}} key = {key}>
                                <div className = "row" style={{width: "80%"}}>
                                    {""}
                                    <h5>  {val.mid}</h5>
                                    <h5> {val.type} </h5>
                                    <h5> {val.uprice} </h5>
                                    <h5> {val.date_received} </h5>
                                    <h5> {val.receivedamount} </h5>
                                    
                                </div>
                                    <button onClick = {() =>{
                                            updateMaterial(val._id)
                                        }}> Edit </button>
                                        <button onClick  = {() =>{
                                            ConfirmDelete(val._id)
                                        }}> Delete </button>
                            </div>
                        )
                    })}
                </div>
                    </div>

            </div>

        </div>
    );
}