import React ,{useState} from "react";
import axios from 'axios';
import './AddEmployeeStyle.css'
import Logo from './image/logo.jpeg'

export default function AddEmployee(){

    const[eid, seteid]= useState("");
    const[name, setname]= useState("");
    const[gender, setgender]= useState("");
    const[job_title, setjob_title]= useState("");
    const[date_joined, setdate_joined]= useState("");
    const[dob, setdob]= useState("");
    const[contact, setcontact]= useState("");
    const[address, setaddress]= useState("");

    function sendData(e){

        const newEmployee={
            eid,
            name,
            gender,
            job_title,
            date_joined,
            dob,
            contact,
            address
        }
        axios.post("http://localhost:4000/employee/add", newEmployee).then (() => {
            alert("Employee Created")
        }).catch((err) =>{
            alert(err)
        })
    }

    return(
        
    <div className="container">
    
    <div class="eimage" >
            <img src = {Logo} width = "150" alt="logo"/>
    </div>

    <div class="addemployee">
        <h1>Employee Management</h1>
    </div>
     
    <div class="addsub">
        <h2>Add Employee</h2>
    </div>
            

    <form onSubmit={sendData} style={{width: "45%", display:"flex"}}>

    
    return(
        

            <label for="EmployeeID">Employee ID</label>
            <input type="text" class="form-control" id="eid" pattern="[D,M,S]{1}[0-9]{4}" placeholder="Format: [D,M,S](1) [0-9](4)" onChange={(e)=>{seteid(e.target.value);}} required/>

        <div className="container">

        
            <div class="eimage" >
                <img src = {Logo} width = "150" alt="logo"/>
            </div>

            <div class="addemployee">
                <h1>Employee Management</h1>
            </div>
            
            <div class="addsub">
                <h2>Add Employee</h2>
            </div>
                    
            <form class = "empform" onSubmit={sendData} style={{width: "45%", display:"flex"}}>
            
                <div style={{width: "50%"}}>

                    <div class="form-group">
                
                        <label for="EmployeeID">Employee ID</label>
                        <input type="text" class="form-control" id="eid" pattern="[D,M,S]{1}[0-9]{4}" placeholder="Format: [D,M,S](1) [0-9](4)" onChange={(e)=>{seteid(e.target.value);}} required/>
                    
                    </div>


            <label  for="Gender">Gender</label>
            <select class="form-control" id="gender" onChange={(e)=>{setgender(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Gender </option>
                <option value="Male"> Male </option>
                <option value="Female"> Female </option>
            </select>

                    <div class="form-group">


                        <label  for="EmployeeName">Employee Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Employee Name" onChange={(e)=>{setname(e.target.value);}} required/>
                        
                    </div>

                    <div class="form-group">


            <label  for="JobTitle">Job Title</label>
            <select class="form-control" id="job_title" onChange={(e)=>{setjob_title(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Job Title </option>
                <option value="Staff Member"> Staff Member </option>
                <option value="Machinist"> Machinist </option>
                <option value="Truck Driver"> Truck Driver </option>
            </select>

            </div>

                        <label  for="Gender">Gender</label>
                        <select class="form-control" id="gender" onChange={(e)=>{setgender(e.target.value);}} required>
                            <option value="" disabled selected hidden> Select Gender </option>
                            <option value="Male"> Male </option>
                            <option value="Female"> Female </option>
                        </select>

                    </div>

                    <div class="form-group">

                        <label  for="JobTitle">Job Title</label>
                        <select class="form-control" id="job_title" onChange={(e)=>{setjob_title(e.target.value);}} required>
                            <option value="" disabled selected hidden> Select Job Title </option>
                            <option value="Staff Member"> Staff Member </option>
                            <option value="Machinist"> Machinist </option>
                            <option value="Truck Driver"> Truck Driver </option>
                        </select>

            <label  for="DateJoined">Date Joined</label>
            <input type="date" class="form-control" id="date_joined" min="1988-01-01" max ="2021-10-01" onChange={(e)=>{setdate_joined(e.target.value);}} required/>

                    </div>

                </div>


                <div style={{width: "50%"}}>

            <label  for="DateOfBirth">Date Of Birth</label>
            <input type="date" class="form-control" id="dob" min="1970-01-01" max ="2005-01-01" onChange={(e)=>{setdob(e.target.value);}} required/>
            
            </div>

                    <div class="form-group">


                        <label  for="DateJoined">Date Joined</label>
                        <input type="date" class="form-control" id="date_joined" min="1988-01-01" max ="2021-10-01" onChange={(e)=>{setdate_joined(e.target.value);}} required/>

            <label  for="Contact">Contact</label>
            <input type="tel" class="form-control" id="contact" pattern="[0-9]{10}" placeholder="Format: [0-9] (10)" onChange={(e)=>{setcontact(e.target.value);}} required/>

                    </div>
                    
                    <div class="form-group">


                        <label  for="DateOfBirth">Date Of Birth</label>
                        <input type="date" class="form-control" id="dob" min="1970-01-01" max ="2005-01-01" onChange={(e)=>{setdob(e.target.value);}} required/>
                        
                    </div>

                    <div class="form-group">


            <label  for="Address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{setaddress(e.target.value);}}/>
            
            </div>
            
            <button type="submit" class="btn btn-primary">Create Employee</button>

                        <label  for="Contact">Contact</label>
                        <input type="tel" class="form-control" id="contact" pattern="[0-9]{10}" placeholder="Format: [0-9] (10)" onChange={(e)=>{setcontact(e.target.value);}} required/>


                    </div>

                    <div class="form-group">

                        <label  for="Address">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{setaddress(e.target.value);}} required/>
                        
                    </div>
                    
                    <button type="submit">Create Employee</button>

                </div>

            </form>
                
        </div>    

    );
}


