import React ,{useState} from "react";
import axios from "axios";
import './addmaterialstyle.css'
import Logo from './image/logo.jpeg'


  export default function AddMaterials(){
    const[mid, setmid]=useState("");
    const[type, settype]= useState("");
    const[uprice, setuprice]= useState("");
    const[date_received, setdate_received]= useState("");
    const[receivedamount, setreceivedamount]= useState("");
   
    function sendData(e){
       e.preventDefault();
        alert("Material Added");

        const newMaterial={
           mid,
           type,
           uprice,
           date_received,
           receivedamount
        }
        axios.post("http://localhost:4000/material/add", newMaterial).then(()=>{
            alert("Material Added")

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
     
    <div class="add"><h2>Add Material
    </h2></div>

    
            

            <form className="form" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>

        <div class="form-group">
      
        <label for="MaterialID">ID</label>
        <input type="text" class="form-control" id="mid" pattern="[M]{1}[0-9]{4}" placeholder="Enter Material ID" onChange={(e)=>{
            setmid(e.target.value);}}/>
        
         </div>


      <div class="form-group">
      
    <label for="MaterialAmount">Amount (kg)</label>
    <input type="number" class="form-control" id="receivedamount" placeholder="Enter amount received" required onChange={(e)=>{
        setreceivedamount(e.target.value);}}/>
    
     </div>

     <div class="form-group">
    <label  for="MaterialType">Material Type</label>
            <select class="form-control" id="type" required onChange={(e)=>{settype(e.target.value);}} required>
                <option value="" disabled selected hidden> Select Material </option>
                <option value="cocochips" class = "select">Coco Chips </option>
                <option value="cocopeats"> cocopeats </option>
                <option value="finedust"> Fine Dust</option>

            </select>

        </div>    
    </div>
    <div style={{width:"50%"}}>
    <div class="form-group">

    <label  for="Uprice">Unit Price (RS.)</label>
    <input type="number" class="form-control" id="uprice" placeholder="Enter Unit Price" required onChange={(e)=>{
        setuprice(e.target.value);
        }}/>
    </div>
    
    <div class="form-group">
    <label  for="Date">Date received</label>
    <input type="date" class="form-control" id="date_received" placeholder="Date received" required onChange={(e)=>{
        setdate_received(e.target.value);
        }}/>
    </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}
