import React ,{useState} from "react";
import './AddMachineStyle.css'
import axios from "axios";


  export default function AddMachine(){

    const[Mnum, setMnum]= useState("");
    const[Mname, setMname]= useState("");
    const[employee, setEmp]= useState("");
    const[status, setStatus]= useState("");
    

    function sendData(e){
       e.preventDefault();
        alert("Machine Added");

        const newMachine={
            Mnum,
            Mname,
            employee,
            status
        }
        axios.post("http://localhost:4000/machine/add", newMachine).then(()=>{
            alert("Machine Added")

    }).catch((err)=>{
        alert(err)
    })
        
    }
    return(
        
        <div className="container">

    <div class="machine"><h1>Machinery Managment
    </h1></div>
     
    <div class="add"><h2>Add Machine
    </h2></div>

    
            

            <form className="form" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="form-group">
      
    <label for="MachineNumber">Machine Number</label>
    <input type="text" class="form-control" id="Mnum" placeholder="Enter Machine Number" onChange={(e)=>{
        setMnum(e.target.value);}}/>
    
     </div>

     <div class="form-group">

    <label  for="MachineName">Machine Name</label>
    <input type="text" class="form-control" id="Mname" placeholder="Enter Machine Name" onChange={(e)=>{
        setMname(e.target.value);
        }}/>
    </div>
    </div>
    <div style={{width:"50%"}}>
    <div class="form-group">

    <label  for="Employee">Employee</label>
    <input type="text" class="form-control" id="employee" placeholder="Enter Employee Name" onChange={(e)=>{
        setEmp(e.target.value);
        }}/>
    </div>
    
    <div class="form-group">
    <label  for="Status">Status</label>
    <input type="text" class="form-control" id="status" placeholder="Enter Status" onChange={(e)=>{
        setStatus(e.target.value);
        }}/>
    </div>
    
    
    <button type="submit" class="button">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


