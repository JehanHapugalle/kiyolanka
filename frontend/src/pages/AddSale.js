import React ,{useState} from "react";
import axios from "axios";
import './AddSaleStyle.css'


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

    <div class="sale"><h1>Sales Managment
    </h1></div>
     
    <div class="saleadd"><h2>Add Sale
    </h2></div>

    
            

            <form className="saleform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="saleform-group">
      
    <label for="Customer'sName">Customer's Name</label>
    <input type="text" class="saleform-control" id="scus_name" saleplaceholder="Enter Customer's Name" onChange={(e)=>{
        setcus_name(e.target.value);}}/>
    
     </div>

     <div class="saleform-group">

    <label  for="ContactNumber">Contact Number</label>
    <input type="text" class="saleform-control" id="scon_number" saleplaceholder="Enter Contact Number" onChange={(e)=>{
        setcon_number(e.target.value);
        }}/>
    </div>
    </div>
    <div style={{width:"50%"}}>
    <div class="saleform-group">

    <label  for="SalesID">Sales ID</label>
    <input type="text" class="saleform-control" id="ssale_id" saleplaceholder="Enter Sales ID" onChange={(e)=>{
        setssale_id(e.target.value);
        }}/>
    </div>
    
    <div class="saleform-group">
    <label  for="E-mail">E-mail</label>
    <input type="text" class="saleform-control" id="s_email" saleplaceholder="Enter e-mail" onChange={(e)=>{
        sets_email(e.target.value);
        }}/>
    </div>

    <div class="saleform-group">
      
    <label for="TotalAmount">Total Amount</label>
    <input type="text" class="saleform-control" id="s_amount" saleplaceholder="Enter Total Amount" onChange={(e)=>{
        sets_amount(e.target.value);}}/>
    
     </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


