import React ,{useState} from "react";
import axios from 'axios';
import './AddEmployeeStyle.css'

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
       e.preventDefault();

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

    <div class="addemployee">
        <h1>Employee Managment</h1>
    </div>
     
    <div class="add">
        <h2>Add Employee</h2>
    </div>
            

    <form className="form" onSubmit={sendData} style={{width: "45%", display:"flex"}}>
    

        <div style={{width: "50%"}}>

            <div class="form-group">
        
            <label for="EmployeeID">Employee ID</label>
            <input type="text" class="form-control" id="eid" placeholder="Enter Employee ID" onChange={(e)=>{seteid(e.target.value);}} required/>
        
            </div>

            <div class="form-group">

            <label  for="EmployeeName">Employee Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Employee Name" onChange={(e)=>{setname(e.target.value);}} required/>
            
            </div>

            <div class="form-group">

            <label  for="Gender">Gender</label>
            <select class="form-control" id="gender" onChange={(e)=>{setgender(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Gender </option>
                <option value="Male" class = "select"> Male </option>
                <option value="Female"> Female </option>
            </select>

            </div>

            <div class="form-group">

            <label  for="JobTitle">Job Title</label>
            <input type="text" class="form-control" id="job_title" placeholder="Enter Job Title" onChange={(e)=>{setjob_title(e.target.value);}} required/>

            </div>

        </div>

        <div style={{width: "50%"}}>

            <div class="form-group">

            <label  for="DateJoined">Date Joined</label>
            <input type="text" class="form-control" id="date_joined" placeholder="Enter Date Joined" onChange={(e)=>{setdate_joined(e.target.value);}} required/>
            
            </div>
            
            <div class="form-group">

            <label  for="DateOfBirth">Date Of Birth</label>
            <input type="text" class="form-control" id="dob" placeholder="Enter Date Of Birth" onChange={(e)=>{setdob(e.target.value);}} required/>
            
            </div>

            <div class="form-group">

            <label  for="Contact">Contact</label>
            <input type="tel" class="form-control" id="contact" pattern="[0-9]{10}" placeholder="Format: [0-9] {10}" onChange={(e)=>{setcontact(e.target.value);}} required/>

            </div>

            <div class="form-group">

            <label  for="Address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{setaddress(e.target.value);}} required/>
            
            </div>
            
            <button type="submit" class="btn btn-primary">Create Employee</button>

        </div>

    </form>
            
    </div>    

    );
}


