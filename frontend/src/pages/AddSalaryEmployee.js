import React ,{useState} from "react";
import './AddSalaryEmployeeStyle.css'
import axios from "axios";


  export default function AddSalaryEmployee(){

    const[SalaryEmpId, setSalaryEmployeeId]= useState("");
    const[SalaryEmpName, setSalaryEmployeeName]= useState("");
    const[SalaryEmpGender, setSalaryEmpGender]= useState("");
    const[SalaryEmpStatus, setSalaryEmpStatus]= useState("");
    const[BasicSalary, setBasicSalary]= useState("");
    const[SalaryBonus, setSalaryBonus]= useState(""); 

    function sendData(e){
       e.preventDefault();
        alert("SalaryEmployee Added");

        const newSalaryEmployee={
            SalaryEmpId,
            SalaryEmpName,
            SalaryEmpGender,
            SalaryEmpStatus,
            BasicSalary,
            SalaryBonus
        }
        axios.post("http://localhost:4000/salary/add", newSalaryEmployee).then(()=>{
            alert("Student Added")
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        
        <div className="salcontainer">

    <div class="salary"><h1>Salary Management
    </h1></div>
     
    <div class="saladd"><h2>Add Salary Employee
    </h2></div>

    
            

            <form className="Salform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="form-group">
      
    <label for="SalaryEmployeeId"> Employee Id</label>
    <input type="text" class="form-control" id="SalaryEmployeeId" placeholder="Enter salary employee id" onChange={(e)=>{
        setSalaryEmployeeId(e.target.value);}}/>
     </div>

     <div class="form-group">

    <label  for="SalaryEmployeeName"> Employee Name</label>
    <input type="text" class="form-control" id="SalaryEmployeeName" placeholder="Enter Salary Employee Name" onChange={(e)=>{
        setSalaryEmployeeName(e.target.value);
        }}/>
    </div>

    <div class="form-group">

    <label  for="SalaryBonus"> Bonus Amount</label>
    <input type="text" class="form-control" id="SalaryBonus" placeholder="Enter Bonus Amount" onChange={(e)=>{
        setSalaryBonus(e.target.value);
        }}/>
    </div>
    </div>
    <div style={{width:"50%"}}>
    
    
    <div class="form-group">


    <label  for="SalaryEmpGender">Employee Gender</label>
    <input type="text" class="form-control" id="SalaryEmpGender" placeholder="Enter Salary Employee Gender" onChange={(e)=>{
        setSalaryEmpGender(e.target.value);
        }}/>
    </div>
    
    <div class="form-group">
    <label  for="SalaryEmpStatus">Employee Status</label>
    <input type="text" class="form-control" id="SalaryEmpStatus" placeholder="Enter Salary Employee Status" onChange={(e)=>{
        setSalaryEmpStatus(e.target.value);
        }}/>
    </div>

    <div class="form-group">
    <label  for="BasicSalary">Basic Salary</label>
    <input type="text" class="form-control" id="BasicSalary" placeholder="Enter Basic Salary " onChange={(e)=>{
        setBasicSalary(e.target.value);
        }}/>
    </div>
    


    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}
