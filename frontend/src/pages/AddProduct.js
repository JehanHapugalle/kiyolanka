import React ,{useState} from "react";
import './AddProductStyle.css'
import axios from "axios";


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

    <div class="product"><h1>Stock Managment
    </h1></div>
     
    <div class="padd"><h2>Add Product
    </h2></div>

    
            

        <form className="pform" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="pform-group">
      
    <label for="ProductNumber">Product ID</label>
    <input type="text" class="pform-control" id="pid" pplaceholder="Enter Product ID" onChange={(e)=>{
        setPid(e.target.value);}}/>
    
     </div>

     <div class="pform-group">

    <label  for="ProductName">Product Name</label>
    <input type="text" class="pform-control" id="pname" pplaceholder="Enter Product Name" onChange={(e)=>{
        setPname(e.target.value);
        }}/>
    </div>

    <div class="pform-group">

    <label  for="Weight">Weight</label>
    <input type="text" class="pform-control" id="weight" pplaceholder="Enter Product Weight" onChange={(e)=>{
        setWeight(e.target.value);
        }}/>
    </div>

    </div>

    <div style={{width:"50%"}}>
    
    
    <div class="pform-group">
    <label  for="Date">Date</label>
    <input type="text" class="pform-control" id="date" pplaceholder="Product Entered Date" onChange={(e)=>{
        setDate(e.target.value);
        }}/>
    </div>

    <div class="pform-group">
    <label  for="NoOfProducts">No Of Products</label>
    <input type="text" class="pform-control" id="nop" pplaceholder="Enter No Of Products" onChange={(e)=>{
        setNop(e.target.value);
        }}/>
    </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


