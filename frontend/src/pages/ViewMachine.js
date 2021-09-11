import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './ViewMachine.css'


export default function Viewmachine(){

    const [machines, setmachines] = useState([]);

    useEffect(() => {
        function getmachines(){
            axios.get("http://localhost:4000/machine/").then ((res) => {
                setmachines(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getmachines();
    }, [])
    
    const deleteMachines = (_id) => {
        alert(_id);
        axios.delete("http://localhost:4000/machine/delete/:id").then (() => {
            console.log(_id);
        }).catch((err) =>{
            alert(err.message);
        })
    }

    const updateMachines = (userId) => {
        const name = prompt("Enter new Machine Name: ");
        
        axios.put("http://localhost:4000/machine/update/:id", {name: name, userId:userId}).then(() =>{
            setmachines(machines.map((val) => {
                return val.userId === userId ? {userId: userId, name: name} : val
            }))
        })
    } 

    return(
            
        <div className="container">

            <div class="machine">
                <h1>Machinery Managment</h1>
            </div>
            
            <div class="retrieve">
                <h2>Machine List</h2>
            </div>

            <div className="list" style={{width: "45%"}}>
                {machines.map((val) => {
                    return(
                        <div className = "displayContainer">
                            <div className = "row">
                                {""}
                                <h5> {val.Mnum} </h5>
                                <h5> {val.Mname} </h5>
                                <h5> {val.employee} </h5>
                                <h5> {val.status} </h5>
                                
                            </div >
                            
                                <button className="Btn" onClick = {() =>{
                                    updateMachines (val.userId)
                                }}> Edit </button>
                                <button className="Btn2" onClick = {() =>{
                                    deleteMachines(val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}

            </div>

        </div>
    );
}