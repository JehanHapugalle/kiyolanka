import React ,{useState} from "react";
import './AddSupplierStyle.css'
import axios from "axios";
import Logo from './image/logo.jpeg'


  export default function AddSupplier(){

    const[sid, setsid]= useState("");
    const[name, setname]= useState("");
    
    const[contact_no, setcontact_no]= useState("");
    const[email, setemail]= useState(""); 
    const[supply_amount, setsupply_amount]= useState("");
    const[unit_price, setunit_price]= useState("");
    const[bank, setbank]= useState("");
    const[account_no, setaccount_no]= useState("");


    function sendData(e){
       e.preventDefault();
        alert("Supplier Added");

        const newSupplier={
            sid,
            name,

            contact_no,
            email,
            supply_amount,
            unit_price,
            bank,
            account_no
        }
    
        axios.post("http://localhost:4000/supplier/add", newSupplier).then(()=>{
             alert("Supplier Added")
             setsid("");
             setname("");
            
             setcontact_no("");
             setemail("");
             setsupply_amount("");
             setunit_price("");
             setbank("");
             setaccount_no("");

        }).catch((err)=>{
            alert(err)
        })

    }
    return(
        
    <div className="supcontainer">

       <div class="imag1" >
       <img src = {Logo} width = "150" alt="logo"/></div>

    <div class="supplier"><h1>Supplier Management</h1>
    </div>
     
    <div class="supadd"><h2>Add Supplier</h2>
    </div>

            <form className="supform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>

    <div class="form-group">
    <label  for="SID">SID</label>
    <input type="text" class="form-control" id="sid" placeholder="Enter Supplier ID" pattern="[S][0-9]{4}" onChange={(e)=>{
        setsid(e.target.value);
        }} required/>
    </div>
        
      
    <div class="form-group">
    <label for="SupplierName">Supplier Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Supplier Name" onChange={(e)=>{
        setname(e.target.value);
        }} required/>
    </div>


    <div class="form-group">
    <label  for="ContactNo">Contact No</label>
    <input type="tel" class="form-control" id="contact_no" pattern="[0-9]{10}" placeholder="Enter Contact No" onChange={(e)=>{
        setcontact_no(e.target.value);
        }} required/>
    </div>
    
    <div class="form-group">
    <label  for="Email">Email</label>
    <input type="text" class="form-control" id="email" placeholder="Enter Email" onChange={(e)=>{
        setemail(e.target.value);
        }} required/>
    </div>
    </div>


    <div style={{width:"50%"}}>

    <div class="form-group">
    <label for="SupplyAmount">Supply Amount</label>
    <input type="number" class="form-control" id="supply_amount" placeholder="Enter Supply Amount" onChange={(e)=>{
        setsupply_amount(e.target.value);
        }} required/>
    </div>

        
    <div class="form-group">
    <label  for="UnitPrice">Unit Price</label>
    <input type="number" class="form-control" id="unit_price" placeholder="Enter Unit Price" onChange={(e)=>{
        setunit_price(e.target.value);
        }} required/>
    </div>
    

    <div class="form-group">
    <label  for="Bank">Bank</label>
    <input type="text" class="form-control" id="bank" placeholder="Enter Bank" onChange={(e)=>{
        setbank(e.target.value);
        }} required/>
    </div>
    
    <div class="form-group">
    <label  for="AccountNo">Account No</label>
    <input type="number" class="form-control" id="account_no" placeholder="Enter Account No" pattern="[0-9]{12}" onChange={(e)=>{
        setaccount_no(e.target.value);
        }} required/>
    </div>   

    <button type="submit" class="sup-submit-btn">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


