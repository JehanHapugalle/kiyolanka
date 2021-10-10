import React ,{useState} from "react";
import axios from "axios";
import './Materialused.css'
import Logo from './image/logo.jpeg'




export default function UsedMaterial(){
    const[usedamount, setusedamount]=useState("");
    const[usedmonth, setusedmonth]= useState("");
    const[usedtype, setusedtype]= useState("");
    const[unit, setunit]= useState("");


    function sendUsed(e){
        e.preventDefault();
         alert("Material Used");
 
         const newUsedMaterial={
            usedamount,
            usedmonth,
            usedtype,
            unit
         }
         axios.post("http://localhost:4000/usedmaterial/add", newUsedMaterial).then(()=>{
             alert("Material Used")
 
     }).catch((err)=>{
         alert(err)
     })
         
     }

     return(
        
        <div className="container">
        <div class="image1">
        <img src={Logo}width="150" alt="logo"/>
        </div>
    <div class="machine"><h1>Material Managment
    </h1></div>
     
    <div class="add"><h2>Used Material
    </h2></div>

    
            

            <form className="form" onSubmit={sendUsed} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>

        <div class="form-group">
      
        <label for="Materialdate">Date</label>
        <select class="form-control" id="usedmonth" required onChange={(e)=>{setusedmonth(e.target.value);}} required>
        <option value="" disabled selected hidden> Select Month </option>
        <option value="January" class = "select">January </option>
        <option value="February" class="select"> February </option>
        <option value="March" class="select"> March</option>
        <option value="April" class="select"> April </option>
        <option value="May" class="select"> May</option>
        <option value="June" class="select"> June </option>
        <option value="July" class="select"> July</option>
        <option value="August" class="select"> August </option>
        <option value="September" class="select"> September</option>
        <option value="October" class="select"> October </option>
        <option value="November" class="select"> November</option>
        <option value="December" class="select"> December </option>

    </select>
        
         </div>

         <div class="form-group">
      
     <label for="UsedMaterialtype">Type</label>
     <select class="form-control" id="usedtype" required onChange={(e)=>{setusedtype(e.target.value);}} required>
     <option value="" disabled selected hidden> Select Material </option>
     <option value="cocopeats" class = "select">Cocopeats </option>
     <option value="finedust" class="select"> Finedust </option>
     <option value="cocochips" class="select"> Cocochips</option>

 </select>
     
      </div>


      <div class="form-group">
      
    <label for="UsedMaterialAmount">Used Amount (kg)</label>
    <input type="number" class="form-control" id="usedamount" placeholder="Enter amount received" required onChange={(e)=>{
        setusedamount(e.target.value);}}/>

        
    
     </div> 
     
     <div class="form-group">
      
    <label for="unit">Unit Price(Rs)</label>
    <input type="number" class="form-control" id="unit" placeholder="Enter Unit Price" required onChange={(e)=>{
        setunit(e.target.value);}}/>

        <button type="submit" class="btn btn-primary">Submit</button>
    
     </div>
     
    </div>
    </form>
        </div>
        
    );

}