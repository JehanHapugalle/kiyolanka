import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './EmployeeListStyle.css'
import Logo from './image/logo.jpeg'

export default function EmployeeList(){

    const [employees, setemployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTermGender, setSearchTermGender] = useState('')
    const [searchTermJobTitle, setsearchTermJobTitle] = useState('')

    useEffect(() => {
        function getemployees() {
            axios.get("http://localhost:4000/employee/").then ((res) => {
                setemployees(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getemployees();
    }, [])

    const updateEmployee = (_id) => {  
        const name = prompt("Enter New Name: ")
        if (name === null) {
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
                name : name,
                job_title : job_title,
                contact : contact,
                address : address,
                _id : _id
            }).then (() => {
                alert("Employee Updated")
                setemployees(employees.map((val) => {
                    return val._id == _id ? 
                    {
                        _id : _id,
                        eid : val.eid,
                        name : name,
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

    function calcYears(date) {

        var year = Number(date.substr(0, 4));
        var month = Number(date.substr(4, 2)) - 1;
        var day = Number(date.substr(6, 2));
        var today = new Date();
        var noofyears = today.getFullYear() - year;
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) 
        {
            noofyears--;
        }
        return noofyears;         
    }

    function ConfirmDelete(id)
    {
        var x = window.confirm("Are you sure you want to delete this employee?");
        if (x)
            deleteEmployee(id);
        else
            return;
    }

        
        var today = new Date();
        var day = Number(date.substr(6, 2));
        var month = Number(date.substr(4, 2)) - 1;
        var year = Number(date.substr(0, 4));
        var noofyears = today.getFullYear() - year;


        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) 
            noofyears--;

        return noofyears;         
    }

    function deleteEmployee(_id) {

        var x = window.confirm("Are you sure you want to delete this employee?");

        if (x){
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
        else
            return;
    }

    return(
            
        <div className="container">


        <div class="eimage" >
            <img src = {Logo} width = "150" alt="logo"/>
        </div>

        <div class="employeelist">
            <h1>Employee Management</h1>
        </div>
            
        <div class="retrieve">
            <h2>Employee List</h2>
        </div>

            <div className="list" style={{width: "45%"}}>

            <div class="eimage" >
                <img src = {Logo} width = "150" alt="logo"/>
            </div>

            <div class="employeelist">
                <h1>Employee Management</h1>
            </div>
                
            <div class="empretrieve">
                <h2>Employee List</h2>
            </div>

            <div className="emplist" style={{width: "45%"}}>


                <div>

                    <input type = "text" class = "search" placeholder = "Search" style={{width: "21%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />


                    <table>
                        <tr className = "row">

                    
                    <select class="empsearch" id="searchgender" style={{width: "19%"}}
                            onChange = {event => {
                                setSearchTermGender(event.target.value);
                            }}
                        >
                            <option value="" disabled selected hidden> Select Gender </option>
                            <option value="" > All Genders </option>
                            <option value="Male"> Male </option>
                            <option value="Female"> Female </option>
                    </select>

                    <select class="empsearch" id="searchjobtitle" style={{width: "19%"}}
                            onChange = {event => {
                                setsearchTermJobTitle(event.target.value);
                            }}
                        >
                            <option value="" disabled selected hidden> Select Job Title </option>
                            <option value="" > All Job Titles </option>
                            <option value="Staff Member"> Staff Member </option>
                            <option value="Machinist"> Machinist </option>
                            <option value="Truck Driver"> Truck Driver </option>
                    </select>

                    <table>
                        <tr className = "emprow">

                            <th>EID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Job Title</th>
                            <th>YOE</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </table>

                    <div class="listdata">  

                    {employees.filter((val) => {
                        if (searchTerm == "" && searchTermGender == "" && searchTermJobTitle == "")
                            return val
                        else if ((val.eid.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    || (val.name.toLowerCase().includes(searchTerm.toLowerCase())))
                                    && val.gender.includes(searchTermGender)
                                    && val.job_title.includes(searchTermJobTitle))
                            return val
                    }).map((val, key) => {
                        return(
                            <div className = "displayempContainer" style={{width: "100%"}} key = {key}>
                                <div className = "emprow" style={{width: "80%"}}>
                                    {""}
                                    <h5> {val.eid} </h5>
                                    <h5> {val.name} </h5>
                                    <h5> {val.gender} </h5>
                                    <h5> {val.job_title} </h5>
                                    <h5> {calcYears(val.date_joined)} </h5>
                                    <h5> {calcYears(val.dob)} </h5>
                                    <h5> {val.contact} </h5>
                                    <h5> {val.address} </h5>
                                </div>

                                    <button onClick = {() =>{

                                            updateEmployee(val._id)
                                        }}> Edit </button>
                                        <button onClick  = {() =>{
                                            ConfirmDelete(val._id)
                                        }}> Delete </button>
                            </div>
                        )
                    })}
                    

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

        </div>
        
    );
}