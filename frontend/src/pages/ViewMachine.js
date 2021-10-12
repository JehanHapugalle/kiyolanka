import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './ViewMachine.css'
import Logo from './image/logo.jpeg'


export default function Viewmachine(){

    const [machines, setmachines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

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
        const employee = prompt("Enter New Employee: ")
        if (employee === null) {
            return; 
        }
        const status = prompt("Enter New Status: ")
        if (status === null) {
            return; 
        }
        const Mhrs = prompt("Enter New Active Hours: ")
        if (Mhrs === null) {
            return; 
        }
        axios.put(`http://localhost:4000/machine/update/${_id}`, 
            {
                employee : employee,
                status : status,
                Mhrs : Mhrs,
                _id :_id
                
            }).then (() => {
            alert("Machine Updated")
            setmachines(machines.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    Mnum: val.Mnum, 
                    Mname: val.Mname, 
                    employee :employee, 
                    status : status, 
                    Mdate:val.Mdate,
                    Mhrs:Mhrs,
                } : val
            }))
        })
    };
        function ConfirmDelete(id)

       {
        var x = window.confirm("Are you sure you want to delete this Machine?");

        if (x)
            deleteMachines(id);
         else
           return;

    }


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
            
        <div className="Mcontainer">
        <div class="imag" >
          <img src = {Logo} width = "150" alt="logo"/></div>
            <div class="machine">
                  <h1>Machinery Managment</h1>
            </div>
            
            <div class="Mretrieve">
                  <h2>Machine List</h2>
            </div>

            <div className="list" style={{width: "45%"}}>
            <div>
                    <input 
                        type = "text" 
                        class = "search" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />

               <table>

                <tr className = "MVrow">

                <th>MID</th>

                <th>NAME</th>

                <th>EMPLOYEE</th>

                <th>STATUS</th>

                <th>DATE</th>

                <th>HOURS</th>


                </tr>

                </table>
                <div className="MachData">
                    {machines.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.Mnum.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.Mname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.employee.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.status.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } 
                          else if (val.Mdate.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                          else if (val.Mhrs.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                          }
                    }).map((val, key) => {
                    return(
                        <div className = "displayContainer" style={{width: "100%"}} key = {key}>
                        <div className = "Mrow" style={{width: "80%"}}>
                                {""}
                                <h5> {val.Mnum} </h5>
                                <h5> {val.Mname} </h5>
                                <h5> {val.employee} </h5>
                                <h5> {val.status} </h5>
                                <h5> {val.Mdate} </h5>
                                <h5> {val.Mhrs} </h5>
                                
                            </div >
                            
                                <button className="Btn" onClick = {() =>{
                                    updateMachines (val._id)
                                }}> Edit </button>
                                <button className="Btn2" onClick = {() =>{
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