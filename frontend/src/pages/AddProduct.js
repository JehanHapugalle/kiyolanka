import React ,{useState} from "react";
import './AddProductStyle.css'
import axios from "axios";
import Logo from './image/logo.jpeg'

  export default function AddProduct(){

    const[pid, setPid]= useState("");
    const[pname, setPname]= useState("");
    const[weight, setWeight]= useState("");
    const[date, setDate]= useState("");
    const[nop, setNop]= useState("");

    function sendData(e){
       e.preventDefault();
        alert("Product Added");

        const newProduct={
            pid,
            pname,
            weight,
            date,
            nop
        }
        
        axios.post("http://localhost:4000/product/add",newProduct).then(()=>{
            alert("Product added")
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        
        <div className="pcontainer">
        <div class="pimag" >
        <img src = {Logo} width = "150" alt="logo"/>
        </div>    
    <div class="product"><h1>Stock Managment
    </h1></div>
     
    <div class="padd"><h2>Add Product
    </h2></div>

    
            

        <form className="pform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="pform-group">
      
    <label for="ProductNumber">Product ID</label>
    <input type="text" class="pform-control" id="pid" pattern="[S][0-9]{3}" placeholder="Enter Product ID" required onChange={(e)=>{
        setPid(e.target.value);}}/>
    
     </div>

     <div class="pform-group">

    <label  for="ProductName">Product Name</label>
    <input type="text" class="pform-control" id="pname" placeholder="Enter Product Name" required onChange={(e)=>{
        setPname(e.target.value);
        }}/>
    </div>

    <div class="pform-group">

    <label  for="Weight">Weight</label>
    <input type="number" class="pform-control" id="weight" placeholder="Enter Product Weight" required onChange={(e)=>{
        setWeight(e.target.value);
        }}/>
    </div>

    </div>

    <div style={{width:"50%"}}>
    
    
    <div class="pform-group">
    <label  for="Date">Date</label>
    <input type="date" class="pform-control" id="date" placeholder="Product Entered Date" required onChange={(e)=>{
        setDate(e.target.value);
        }}/>
    </div>

    <div class="pform-group">
    <label  for="NoOfProducts">No Of Products</label>
    <input type="number" class="pform-control" id="nop" placeholder="Enter No Of Products" required onChange={(e)=>{
        setNop(e.target.value);
        }}/>
    </div>
    
    
    <button type="submit" class="psubmitbutton">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


