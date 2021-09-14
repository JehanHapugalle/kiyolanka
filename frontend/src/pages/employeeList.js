import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './EmployeeListStyle.css'

export default function EmployeeList(){

    const [employees, setemployees] = useState([]);

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

    const update = (_id) => {
        const newName = prompt("Enter New Name: ")
        const newJobTitle = prompt("Enter New Job title: ")
        const newContact = prompt("Enter New Contact: ")
        const newAddress = prompt("Enter New Address: ")

        axios.put(`http://localhost:4000/employee/update/${_id}`, 
            {
                newName : newName,
                newJobTitle : newJobTitle,
                newContact : newContact,
                newAddress : newAddress,
            }).then (() => {
            alert("Employee Updated")
            setemployees(employees.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    eid: val.eid, 
                    gender: val.gender, 
                    name :newName, 
                    job_title : newJobTitle, 
                    date_joined : val.date_joined,
                    dob : val.dob,
                    contact : newContact, 
                    address : newAddress
                } : val
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
                {employees.map((val) => {
                    return(
                        <div className = "displayContainer">
                            <div className = "row">
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
                                    update(val._id)
                                }}> Edit </button>
                                <button onClick  = {() =>{
                                    deleteEmployee(val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}

            </div>

        </div>
    );
}