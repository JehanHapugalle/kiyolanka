import React ,{useState} from "react";
import './AddMachineStyle.css'
import axios from "axios";
import Logo from './image/logo.jpeg'


  export default function AddMachine(){

    const[Mnum, setMnum]= useState("");
    const[Mname, setMname]= useState("");
    const[employee, setEmp]= useState("");
    const[status, setStatus]= useState("");
    const[Mdate, setMdate]= useState("");
    const[Mhrs, setMhrs]= useState("");
    

    function sendData(e){
       e.preventDefault();
        

        const newMachine={
            Mnum,
            Mname,
            employee,
            status,
            Mdate,
            Mhrs
        }
        axios.post("http://localhost:4000/machine/add", newMachine).then(()=>{
            alert("Machine Added")

        }).catch((err)=>{
            alert(err)
     })
        
    }
    
     return(
        
      <div className="Mcontainer">
         <div class="imag" >
          <img src = {Logo} width = "150" alt="logo"/></div>

          <div class="machine"><h1>Machinery Management</h1>
       </div>
     
       <div class="add"><h2>Add Machine </h2>
       </div>

            

      <form className="Mform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      
      <div class="form-group">
      <label for="MachineNumber">Machine Number</label>
      <input type="text" class="form-control"  pattern="[M]{1}[0-9]{4}" placeholder="Format: [M]{1}[0-9]{4}" id="Mnum" placeholder="Enter Machine Number" onChange={(e)=>{
      setMnum(e.target.value);}}
        required/>
      </div>

     
      <div class="form-group">
      <label  for="MachineName">Machine Name</label>
      <select class="form-control" id="Mname" onChange={(e)=>{setMname(e.target.value);}}
        required>
                <option value="" disabled selected hidden> Select Machines </option>
                <option value="Grow bag press Machine " class = "select">Grow bag press Machine </option>
                <option value="Siever"> Siever </option>
                <option value="Drilling Machine"> Drilling Machine</option>
                <option value="5kg Press Machine">5kg Press Machine </option>
                <option value="25Kg press Machine">25Kg press Machine </option>
            </select>
      </div>
      <div class="form-group">

      <label  for="MachineHrs">Active Hours</label>
      <input type="number" class="form-control" id="Mhrs"pattern="[0-8]{1}" placeholder="Enter Active Hours" onChange={(e)=>{
        setMhrs(e.target.value);
        }}required/>
      </div>
      </div>

      <div style={{width:"50%"}}>

      <div class="form-group">
      <label  for="Employee">Employee</label>
     <input type="text" class="form-control" id="employee" placeholder="Enter Employee Name" onChange={(e)=>{
        setEmp(e.target.value);
        }}required/>
      </div>


    <div class="form-group">  
    <label for="EmployeeDate">Date</label>
    <input type="date" class="form-control"  id="Mdate" placeholder="Enter Date" onChange={(e)=>{
        setMdate(e.target.value);}}
        required/>
    </div>
    
    <div class="form-group">
    <label  for="Status">Status</label>
    <select class="form-control" id="status" onChange={(e)=>{setStatus(e.target.value);}} 
    required>
                <option value="" disabled selected hidden> Select status </option>
                <option value="Good" class = "select"> Good </option>
                <option value="New"> new </option>
                <option value="Broken">Broken </option>
            </select>
    </div>
    
    
               <button type="submit" class="button">Submit</button>
             </div>
          </form>
       </div>
        
    );
}


