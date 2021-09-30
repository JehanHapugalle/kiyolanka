import React ,{useState} from "react";
import axios from "axios";
import './AddSaleStyle.css'
import Logo from './image/logo.jpeg'


  export default function AddSale(){

    const[scus_name, setcus_name]= useState("");
    const[scon_number, setcon_number]= useState("");
    const[ssale_id, setssale_id]= useState("");
    const[s_email, sets_email]= useState("");
    const[s_amount, sets_amount]= useState("");

    function sendData(e){
       e.preventDefault();
        alert("Sale Added");

        const newSale={
            scus_name,
            scon_number,
            ssale_id,
            s_email,
            s_amount
        }
        axios.post("http://localhost:4000/sale/add", newSale).then(()=>{
            alert("Sale Added")

    }).catch((err)=>{

        alert(err)

    })
    }
    return(
        
        <div className="salecontainer">

    <div class="saleimag" >
    <img src = {Logo} width = "150" alt="logo"/>
    </div>

    <div class="sale"><h1>Sales Managment
    </h1></div>
     
    <div class="saleadd"><h2>Add Sale
    </h2></div>

    
            

            <form className="saleform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="saleform-group">
      
    <label for="Customer'sName">Customer's Name</label>
    <input type="text" class="saleform-control" id="scus_name" placeholder="Enter Customer's Name" onChange={(e)=>{
        setcus_name(e.target.value);}} required/>
    
     </div>

     <div class="saleform-group">

    <label  for="ContactNumber">Contact Number</label>
    <input type="tel" pattern="[0-9]{10}" class="saleform-control" id="scon_number" placeholder="Enter Contact Number" onChange={(e)=>{
        setcon_number(e.target.value);
        }}required/>
    </div>
    </div>
    <div style={{width:"50%"}}>
    <div class="saleform-group">

    <label  for="SalesID">Sales ID</label>
    <input type="text" class="saleform-control" id="ssale_id" placeholder="Enter Sales ID" onChange={(e)=>{
        setssale_id(e.target.value);
        }}required/>
    </div>
    
    <div class="saleform-group">
    <label  for="E-mail">E-mail</label>
    <input type="email" class="saleform-control" id="s_email" placeholder="Enter e-mail" onChange={(e)=>{
        sets_email(e.target.value);
        }}required/>
    </div>

    <div class="saleform-group">
      
    <label for="TotalAmount">Total Amount</label>
    <input type="text" class="saleform-control" id="s_amount" placeholder="Enter Total Amount" onChange={(e)=>{
        sets_amount(e.target.value);}}required/>
    
     </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


