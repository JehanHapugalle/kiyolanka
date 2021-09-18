import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './EmployeeListStyle.css'

export default function EmployeeList(){

    const [employees, setemployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        function getemployees(){
            axios.get("http://localhost:4000/employee/").then ((res) => {
                setemployees(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getemployees();
    }, [])

    const updateEmployee = (_id) => {  
        const newname = prompt("Enter New Name: ")
        if (newname === null) {
            return; 
        }
        const job_title = prompt("Enter New Job title: ")
        if (job_title === null) {
            return; 
        }
        const contact = prompt("Enter New Contact: ")
        if (contact === null) {
            return; 
        }
        const address = prompt("Enter New Address: ")
        if (address === null) {
            return; 
        }

        axios.put(`http://localhost:4000/employee/update/${_id}`, 
            {
                name : newname,
                job_title : job_title,
                contact : contact,
                address : address,
                _id : _id
            }).then (() => {
                alert("Employee Updated")
                setemployees(employees.map((val) => {
                    return val._id == _id ? {
                        _id : _id,
                        eid : val.eid,
                        name : newname,
                        gender : val.gender,
                        job_title : job_title,
                        date_joined : val.date_joined,
                        dob : val.dob,
                        contact : contact,
                        address : address
                    } : val;
                }))
            })
    };


    const deleteEmployee = (_id) => {
        axios.delete(`http://localhost:4000/employee/delete/${_id}`).then ((res) => {
            alert("Employee Deleted")
            setemployees(
                employees.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
        })
    }

    return(
            
        <div className="container">

            <div class="employeelist">
                <h1>Employee Managment</h1>
            </div>
            
            <div class="retrieve">
                <h2>Employee List</h2>
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
                    {employees.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.eid.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.gender.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.job_title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } 
                    }).map((val, key) => {
                        return(
                            <div className = "displayContainer" style={{width: "100%"}} key = {key}>
                                <div className = "row" style={{width: "80%"}}>
                                    {""}
                                    <h5> {val.eid} </h5>
                                    <h5> {val.name} </h5>
                                    <h5> {val.gender} </h5>
                                    <h5> {val.job_title} </h5>
                                    <h5> {val.date_joined} </h5>
                                    <h5> {val.dob} </h5>
                                    <h5> {val.contact} </h5>
                                    <h5> {val.address} </h5>
                                </div>
                                    <button onClick = {() =>{
                                            updateEmployee(val._id)
                                        }}> Edit </button>
                                        <button onClick  = {() =>{
                                            deleteEmployee(val._id)
                                        }}> Delete </button>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    );
}