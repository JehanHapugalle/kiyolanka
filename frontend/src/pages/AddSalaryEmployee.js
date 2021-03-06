import React ,{useState} from "react";
import './AddSalaryEmployeeStyle.css'
import axios from "axios";
import Logo from './image/logo.jpeg'


  export default function AddSalaryEmployee(){

    const[SalaryEmpId, setSalaryEmployeeId]= useState("");
    const[SalaryEmpName, setSalaryEmployeeName]= useState("");
    const[SalaryEmpACCno, setSalaryEmpACCno]= useState("");
    const[SalaryEmpMonth, setSalaryEmpMonth]= useState("");
    const[BasicSalary, setBasicSalary]= useState("");
    const[SalaryBonus, setSalaryBonus]= useState(""); 

    function sendData(e){
       e.preventDefault();
       

        const newSalaryEmployee={
            SalaryEmpId,
            SalaryEmpName,
            SalaryEmpACCno,
            SalaryEmpMonth,
            BasicSalary,
            SalaryBonus
        }
        axios.post("http://localhost:4000/salary/add", newSalaryEmployee).then(()=>{
            alert("Salary Employee Added")
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        
        <div className="salcontainer">
<div class="imag" >

<img src = {Logo} width = "150" alt="logo"/></div>
    <div class="salary"><h1>Salary Management
    </h1></div>
     
    <div class="saladd"><h2>Add Salary Employee
    </h2></div>

    
            

            <form className="Salform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="form-group">
      
    <label for="SalaryEmployeeId"> Employee Id</label>
    <input type="text" class="form-control" id="SalaryEmployeeId" pattern="[S]{1}[0-9]{4}" placeholder="Format: [D,M,S]{1}[0-9]{4}" placeholder="Enter salary employee id" onChange={(e)=>{
        setSalaryEmployeeId(e.target.value);}}required/>
     </div>

     <div class="form-group">

    <label  for="SalaryEmployeeName"> Employee Name</label>
    <input type="text"   class="form-control" id="SalaryEmployeeName" placeholder="Enter Salary Employee Name" onChange={(e)=>{
        setSalaryEmployeeName(e.target.value);
        }}required/>
    </div>

    <div class="form-group">

    <label  for="SalaryBonus"> Bonus Amount</label>
    <input type="number" class="form-control" id="SalaryBonus"   placeholder="Enter Bonus Amount" onChange={(e)=>{
        setSalaryBonus(e.target.value);
        }}/>
    </div>
    </div>
    <div style={{width:"50%"}}>
    
    
    <div class="form-group">


    <label  for="SalaryEmpACCno">Account Number</label>
    <input type="tel" class="form-control"  id="SalaryEmpACCno"  pattern="[0-9]{4}" placeholder="Enter Account Number" onChange={(e)=>{
        setSalaryEmpACCno(e.target.value);
        }}required/>
    </div>
    
    <div class="form-group">
    <label  for="BonusT">Select Month</label>
            <select class="form-control" id="BonusT" onChange={(e)=>{setSalaryEmpMonth(e.target.value);}} required>
                <option value="" disabled selected hidden> Month </option>
                <option value="January" >January </option>
                <option value="February"> February</option>
                <option value="March"> March </option>
                <option value="April"> April </option>
                <option value="May"> May </option>
                <option value="June"> June </option>
                <option value="July"> July </option>
                <option value="August"> August </option>
                <option value="September"> September </option>
                <option value="October"> October </option>
                <option value="November"> November </option>
                <option value="December"> December </option>


            </select>

            </div>

    <div class="form-group">
    <label  for="BasicSalary">Basic Salary</label>
    <input type="number" class="form-control" id="BasicSalary"  placeholder="Enter Basic Salary " onChange={(e)=>{
        setBasicSalary(e.target.value);
        }}required/>
    </div>
    


    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}
