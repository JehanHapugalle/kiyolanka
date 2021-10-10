import React ,{useState,useEffect,useRef} from "react";
import axios from "axios";
import Logo from './image/logo.jpeg'
import './AddCalSaleStyles.css'

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {Button,} from "@progress/kendo-react-buttons";
import '@progress/kendo-theme-default/dist/all.css';



export default function AddCal(){

    const [s_totalcost, sets_totalcost] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [s_price, sets_price] = useState(0);

    const pdfExportComponent = useRef (null);
      const handleExportWithComponent = (event) => {
      pdfExportComponent .current.save();
     };


    const[s_qty, sets_qty]= useState("");
    const[s_productname, sets_productname]= useState("");
    const[s_eachprice, sets_eachprice]= useState("");
    const[sl_date, setsl_date]=useState("");

    function sendData(e){
      e.preventDefault();

      const newPrice={
        s_productname,
        s_qty,
        s_eachprice,
        sl_date
    }
    
    axios.post("http://localhost:4000/cal/add", newPrice).then (() => {
        alert("Price Added")
        sets_totalcost([...s_totalcost, {
          s_qty :  s_qty,
          s_productname : s_productname,
          s_eachprice : s_eachprice,
          sl_date : sl_date,
          
      }]);
       
    });
}

useEffect(() => {
    function gets_totalcost(){
        axios.get("http://localhost:4000/cal/").then ((res) => {
            sets_totalcost(res.data);
        }).catch((err) =>{
            alert(err.message);
        })
    }
    gets_totalcost();
}, [])

function ConfirmDelete(id)
{
    var x = window.confirm("Are you sure you want to delete this Payment bill?");
    if (x)
        deleteAttendance(id);
    else
        return;
}

const deleteAttendance = (_id) => {
    axios.delete(`http://localhost:4000/cal/delete/${_id}`).then ((res) => {
        alert("Bill Deleted")
        sets_totalcost(
            s_totalcost.filter((val) => {
                return val._id != _id;
            })
        )
    }).catch((err) =>{
        alert(err.message);
    })
}



useEffect(() => {
    let temp = 0;
    for(let i = 0; i < s_totalcost.length; i++) {
      temp += parseInt(s_totalcost[i].s_eachprice);
    }
  
    sets_price(temp);
  }, [s_totalcost]);
  
  
    return(  

  <PDFExport ref={pdfExportComponent}margin={{top: 50, right: -450,bottom:-500}} >
    <div className="scalcontainer">
    <div class="imag" >
      <img src = {Logo} width = "150" alt="logo"/></div>
        <div class="scalEx">
              <h1>Sales Managment</h1>
        </div>
        
        <div class="scalretrieve">
              <h2>Bill Reciept</h2>
        </div>

        <div className="list" style={{width: "45%"}}>
        <div>
        <div className="scalbutton-area">
           <Button primary={true} onClick={handleExportWithComponent}>Print Bill</Button>
         </div>
                {/* <input className="scalsearch"
                    type = "text" 
                    class = "search" 
                    placeholder = "Search" 
                    style={{width: "25%"}} 
                    onChange = {event => {
                        setSearchTerm(event.target.value);
                    }}
                /> */}
               
                 <table>
                 
        

                <tr className = "scalrow" >

                <th >Product Name</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Price</th>


                </tr>

                </table>
          
                {s_totalcost.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.sl_date.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    } else if (val.s_productname.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                      }
                }).map((val, key) => {
                return(
                    <div className = "EdisplayContainer" style={{width: "100%"}} key = {key}>
                    <div className = "Mrow" style={{width: "80%"}}>
                            {""}
                            <h5> {val.s_productname} </h5>
                            <h5> {val.sl_date} </h5>
                            <h5> {val.s_qty} </h5>
                            <h5> {val.s_eachprice} </h5>
                            
                            
                        </div >
                        
                            <button className="scalBtnEx" onClick = {() =>{
                                ConfirmDelete(val._id)
                            }}> Delete </button>
                            
                    </div>
                    
                )
                
            })}
            
            </div>
           
     </div>



         <header> 
         <div className="scaltotal-expense">Total:Rs {s_price}</div>
        </header>
     
      
   <div class="salecal"><h1>Sales Managment</h1></div>
 
   <div class="salecaladd"><h2>Bill</h2></div>

      <form className="scalexform" onSubmit={sendData} >
        
      <div className="form-inner">
      
      <div style={{width:"50%"}}>
      <div class="form-group">
      <label  for="ProductName">Product Name</label>
      <select class="form-control" id="s_productname"onChange={(e)=>{sets_productname(e.target.value);}}required>useRef={s_productname}
        <option value="" disabled selected hidden> Select Product Name </option>
        <option value="GROW BAGS" > GROW BAGS </option>
        <option value="BRIQUETTES" > BRIQUETTES </option>
        <option value="BLOCKS" > BLOCKS </option>
        <option value="BALES"> BALES </option>
        </select>
      </div>

     
      <div class="form-group">

      <label  for="date">Date</label>
      <input type="date" class="form-control" id="sl_date"placeholder="Enter the Date"  onChange={(e)=>{setsl_date(e.target.value);}}required/>
      </div>
      </div>
      
      <div style={{width:"40%"}}>
      <div class="form-groupp">
      <label  for="quantity">Quantity</label>
      <input type="number" class="form-control" id="s_qty"placeholder="Enter the Quantity"  onChange={(e)=>{sets_qty(e.target.value);}}required/>
      </div>

      <div class="form-group">
      <label  for="Price">Price</label>
      <input type="number" class="form-control" id="s_eachprice"placeholder="Enter the Price"  onChange={(e)=>{sets_eachprice(e.target.value);}}required/>
      </div>
      </div>
      
    
               <button type="submit" class="subbutton">Submit</button>
             </div>
            
          </form>
       </div>
       </PDFExport>
   );
           
}