import React ,{useState} from "react";
import './AddTransportStyle.css'
import axios from "axios";
import Logo from './image/logo.jpeg'

  export default function AddTransport(){

    const[did, setdid]= useState("");
    const[dname, setdname]= useState("");
    const[date, setdate]= useState("");
    const[licence_no, setlicence_no]= useState("");
    const[vehicle_no, setvehicle_no]= useState("");
    const[vehicle_payment, setvehicle_payment]= useState("");
    const[driver_payment, setdriver_payment]= useState("");

    function sendData(e){
       e.preventDefault();
       alert("Transport Added")
        
        const newTransport={
            did,
            dname,
            date,
            licence_no,
            vehicle_no,
            vehicle_payment,
            driver_payment
        }
        console.log(newTransport);
        axios.post("http://localhost:4000/transport/add",newTransport).then(()=>{
           alert("Transport Added")
           
        }).catch((err)=>{
            
        alert(err)
    })

    }
    return(
        
        <div className="Tcontainer">
            <div class="imag" >



<img src = {Logo} width = "150" alt="logo"/></div>

    <div class="transport"><h1>Transport Managment
    </h1></div>
     
    <div class="add"><h2>Add Transport
    </h2></div>

    
            

            <form className="Tform" onSubmit={sendData} style={{width:"45%",display:"flex"}}>
        <div style={{width:"60%"}}>
      
      <div class="form-group">
        
    <label for="DriverID">Driver ID:</label>
    <input type="tel" class="form-control" id="did" placeholder="Enter Driver ID" pattern="[0-9]{10}" onChange={(e)=>{
        setdid(e.target.value);}}required/>
    
     </div>

     <div class="form-group">

    <label  for="DriverName">Driver Name:</label>
    <input type="text" class="form-control" id="dname" placeholder="Enter Driver Name" onChange={(e)=>{
        setdname(e.target.value);
        }}required/>

         <div class="form-group">

<label  for="Date">Date:</label>
<input type="date" class="form-control" id="date" placeholder="Enter Date" onChange={(e)=>{
    setdate(e.target.value);
    }}required/>
</div>

    
<div class="form-group">
    <label  for="VehicleNumber">vehicle Number:</label>
    <input type="text" class="form-control" id="vehicle_no" placeholder="Enter Vehicle Number" onChange={(e)=>{
        setvehicle_no(e.target.value);
        }}required/>
    </div>
    </div>
    </div>
    <div style={{width:"50%"}}>
   
    
    <div class="form-group">
    <label  for="VehiclePayment">Vehicle Payment:</label>
    <input type="number" class="form-control" id="vehicle_payment" placeholder="Enter vehicle payment" onChange={(e)=>{
        setvehicle_payment(e.target.value);
        }}required/>
    </div>

    <div class="form-group">
    <label  for="LicenceNumber">Licence Number:</label>
    <input type="text " class="form-control" id="licence_no" placeholder="Enter licence Number"  onChange={(e)=>{
        setlicence_no(e.target.value);
        }}required/>
    </div>

    <div class="form-group">
    <label  for="DriverPayment">Driver Payment:</label>
    <input type="number" class="form-control" id="driver_payment" placeholder="Enter driver payment" onChange={(e)=>{
        setdriver_payment(e.target.value);
        }}required/>
        
    
    </div>

    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


 