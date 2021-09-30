import React ,{useState} from "react";
import './AddSupplierStyle.css'
import axios from "axios";
import Logo from './image/logo.jpeg'


  export default function AddSupplier(){

    const[name, setname]= useState("");
    const[nic_no, setnic_no]= useState("");
    const[address, setaddress]= useState("");
    const[contact_no, setcontact_no]= useState(""); 
    const[email, setemail]= useState("");
    const[date_of_birth, setdate_of_birth]= useState("");
    const[supply_scale, setsupply_scale]= useState("");
    const[payment_type, setpayment_type]= useState("");
    const[bank, setbank]= useState("");
    const[account_no, setaccount_no]= useState("");


    function sendData(e){
       e.preventDefault();
        alert("Supplier Added");

        const newSupplier={
            name,
            nic_no,
            address,
            contact_no,
            email,
            date_of_birth,
            supply_scale,
            payment_type,
            bank,
            account_no
        }
        
        axios.post("http://localhost:4000/supplier/add", newSupplier).then(()=>{
             alert("Supplier Added")
             setname("");
             setnic_no("");
             setaddress("");
             setcontact_no("");
             setemail("");
             setdate_of_birth("");
             setsupply_scale("");
             setpayment_type("");
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
    <label for="SupplierName">Supplier Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Supplier Name" onChange={(e)=>{
        setname(e.target.value);
        }} required/>
    </div>

    <div class="form-group">
     <label  for="NICNo">NIC No</label>
    <input type="number" class="form-control" id="nic_no" placeholder="Enter NIC No" pattern="[0-9]{12}" onChange={(e)=>{
        setnic_no(e.target.value);
        }} required/>
    </div>

    <div class="form-group">
    <label  for="Address">Address</label>
    <input type="text" class="form-control" id="address" placeholder="Enter Address" onChange={(e)=>{
        setaddress(e.target.value);
        }} required/>
    </div>
    
    <div class="form-group">
    <label  for="ContactNo">Contact No</label>
    <input type="tel" class="form-control" id="contact_no" placeholder="Enter Contact No" pattern="[0-9]{10}"  onChange={(e)=>{
        setcontact_no(e.target.value);
        }} required/>
    </div>

    <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Email" onChange={(e)=>{
        setemail(e.target.value);
        }} required/>
    </div>
    </div> 

    <div style={{width:"50%"}}>
        
    <div class="form-group">
    <label  for="DateOfBirth">Date of Birth</label>
    <input type="date" class="form-control" id="date_of_birth" placeholder="Enter Date of Birth" onChange={(e)=>{
        setdate_of_birth(e.target.value);
        }} required/>
    </div>
    
    <div class="form-group">
    <label  for="SupplyScale">Supply Scale</label>
     <select class="form-control" id="supply_scale" placeholder="Enter Supply Scale" onChange={(e)=>{
        setsupply_scale(e.target.value);
        }} required> 
        <option value="" disabled selected hidden> Select Scale </option>
        <option value="Small" class="select1"> Small </option>
        <option value="Large" class="select2"> Large </option>
     </select>
    </div>

    <div class="form-group">
    <label  for="PaymentType">Payment Type</label>
    <input type="text" class="form-control" id="payment_type" placeholder="Enter Payment Type" onChange={(e)=>{
        setpayment_type(e.target.value);
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

    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


