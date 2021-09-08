import React ,{useState} from "react";
import './addEmployeeStyle.css'

export default function AddEmployee(){

    const[eid, seteid]= useState("");
    const[name, setname]= useState("");
    const[gender, setgender]= useState("");
    const[datejoined, setdatejoined]= useState("");
    const[dob, setdob]= useState("");
    const[contact, setcontact]= useState("");
    const[jobtitle, setjobtitle]= useState("");
    const[address, setaddress]= useState("");

    function sendData(e){
       e.preventDefault();
        alert("Employee Added");

        const newEmployee={
            eid,
            name,
            gender,
            datejoined,
            dob,
            contact,
            jobtitle,
            address
        }
        console.log(newEmployee);
    }
    return(
        
    <div className="container">

    <div class="employee">
        <h1>Employee Managment</h1>
    </div>
     
    <div class="add">
        <h2>Add Employee</h2>
    </div>
            

    <form className="form" onSubmit={sendData} style={{width: "45%", display:"flex"}}>
    

        <div style={{width: "50%"}}>

            <div class="form-group">
        
            <label for="EmployeeID">Employee ID</label>
            <input type="text" class="form-control" id="eid" placeholder="Enter Employee ID" onChange={(e)=>{seteid(e.target.value);}}/>
        
            </div>

            <div class="form-group">

            <label  for="EmployeeName">Employee Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Employee Name" onChange={(e)=>{setname(e.target.value);}}/>
            
            </div>

            <div class="form-group">

            <label  for="Gender">Gender</label>
            <input type="text" class="form-control" id="gender" placeholder="Enter Gender" onChange={(e)=>{setgender(e.target.value);}}/>

            </div>

            <div class="form-group">

            <label  for="JobTitle">Job Title</label>
            <input type="text" class="form-control" id="jobtitle" placeholder="Enter Job Title" onChange={(e)=>{setjobtitle(e.target.value);}}/>

            </div>

        </div>

        <div style={{width: "50%"}}>

            <div class="form-group">

            <label  for="DateJoined">Date Joined</label>
            <input type="text" class="form-control" id="datejoined" placeholder="Enter Date Joined" onChange={(e)=>{setdatejoined(e.target.value);}}/>
            
            </div>
            
            <div class="form-group">

            <label  for="DateOfBirth">Date Of Birth</label>
            <input type="text" class="form-control" id="dob" placeholder="Enter Date Of Birth" onChange={(e)=>{setdob(e.target.value);}}/>
            
            </div>

            <div class="form-group">

            <label  for="Contact">Contact</label>
            <input type="text" class="form-control" id="contact" placeholder="Enter Contact" onChange={(e)=>{setcontact(e.target.value);}}/>
            
            </div>

            <div class="form-group">

            <label  for="Address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{setaddress(e.target.value);}}/>
            
            </div>
            
            <button type="submit" class="btn btn-primary">Create Employee</button>

        </div>

    </form>
            
    </div>    

    );
}


