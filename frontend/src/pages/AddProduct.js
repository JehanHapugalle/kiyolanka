import React ,{useState} from "react";
import './AddProductStyle.css'


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
        console.log(newProduct);
    }
    return(
        
        <div className="container">

    <div class="product"><h1>Stock Managment
    </h1></div>
     
    <div class="add"><h2>Add Product
    </h2></div>

    
            

            <form className="form" onSubmit={sendData} style={{width:"40%",display:"flex"}}>
        <div style={{width:"50%"}}>
      
      <div class="form-group">
      
    <label for="ProductNumber">Product ID</label>
    <input type="text" class="form-control" id="pid" placeholder="Enter Product ID" onChange={(e)=>{
        setPid(e.target.value);}}/>
    
     </div>

     <div class="form-group">

    <label  for="ProductName">Product Name</label>
    <input type="text" class="form-control" id="pname" placeholder="Enter Product Name" onChange={(e)=>{
        setPname(e.target.value);
        }}/>
    </div>

    <div class="form-group">

    <label  for="Weight">Weight</label>
    <input type="text" class="form-control" id="weight" placeholder="Enter Product Weight" onChange={(e)=>{
        setWeight(e.target.value);
        }}/>
    </div>

    </div>

    <div style={{width:"50%"}}>
    
    
    <div class="form-group">
    <label  for="Date">Date</label>
    <input type="text" class="form-control" id="date" placeholder="Product Entered Date" onChange={(e)=>{
        setDate(e.target.value);
        }}/>
    </div>

    <div class="form-group">
    <label  for="NoOfProducts">No Of Products</label>
    <input type="text" class="form-control" id="nop" placeholder="Enter No Of Products" onChange={(e)=>{
        setNop(e.target.value);
        }}/>
    </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
        </div>
        
    );
}


