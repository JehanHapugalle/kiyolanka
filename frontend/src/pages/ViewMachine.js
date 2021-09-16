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
    
    const updateMachines = (_id) => {
        const newEmp = prompt("Enter New Employee: ")
        const newStatus = prompt("Enter New Status: ")

        axios.put(`http://localhost:4000/machine/update/${_id}`, 
            {
                newEmp : newEmp,
                newStatus : newStatus,
                
            }).then (() => {
            alert("Machine Updated")
            setmachines(machines.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    Mnum: val.Mnum, 
                    Mname: val.Mname, 
                    employee :newEmp, 
                    status : newStatus, 
                } : val
            }))
        })
    };


    const deleteMachines = (_id) => {
        axios.delete(`http://localhost:4000/machine/delete/${_id}`).then ((res) => {
            alert("Machine Deleted")
            setmachines(
                machines.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
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