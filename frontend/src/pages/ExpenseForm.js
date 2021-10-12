import React ,{useState,useEffect,useRef} from "react";
import axios from "axios";
import Logo from './image/logo.jpeg'
import './Expense.css'

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {Button,} from "@progress/kendo-react-buttons";
import '@progress/kendo-theme-default/dist/all.css';



  export default function ExpenseForm(){

    const [expenses, setExpenses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [totalExpenses, setTotalExpenses] = useState(0);

    const pdfExportComponent = useRef (null);
    const handleExportWithComponent = (event) => {
      pdfExportComponent .current.save();
    };

    const[desc, setDesc]= useState("");
    const[Eprice, setPrice]= useState("");
    const[Edate, setDate]= useState("");

    function sendData(e){
      e.preventDefault();

      const newExpense={
          desc,
          Eprice,
          Edate
      }
      
      axios.post("http://localhost:4000/expense/add", newExpense).then (() => {
          alert("Expense Added")
          setExpenses([...expenses, {
            desc : desc,
            Eprice : Eprice,
            Edate : Edate,
            
        }]);
         
      });
  }
  

  useEffect(() => {
    function getExpenses(){
        axios.get("http://localhost:4000/expense/").then ((res) => {
            setExpenses(res.data);
        }).catch((err) =>{
            alert(err.message);
        })
    }
    getExpenses();
}, [])

function ConfirmDelete(id)
{
    var x = window.confirm("Are you sure you want to delete this employee?");
    if (x)
        deleteAttendance(id);
    else
        return;
}

const deleteAttendance = (_id) => {
    axios.delete(`http://localhost:4000/expense/delete/${_id}`).then ((res) => {
        alert("Expense Deleted")
        setExpenses(
            expenses.filter((val) => {
                return val._id != _id;
            })
        )
    }).catch((err) =>{
        alert(err.message);
    })
}


useEffect(() => {
  let temp = 0;
  for(let i = 0; i < expenses.length; i++) {
    temp += parseInt(expenses[i].Eprice);
  }

  setTotalExpenses(temp);
}, [expenses]);



   
    
  return( 

  <PDFExport ref={pdfExportComponent}margin={{top: 50, right: -450,bottom:-300}} >
    <div className="Mcontainer">
    <div class="Eimag" >
      <img src = {Logo} width = "150" alt="logo"/></div>
        <div class="machineEx">
              <h1>Machinery Managment</h1>
        </div>
        
        <div class="MEretrieve">
              <h2>Machine Expenses</h2>
        </div>

        <div className="list" style={{width: "45%"}}>
        <div>
        <div className="Ebutton-area">
           <Button primary={true} onClick={handleExportWithComponent}>Generate</Button>
         </div>
                <input className="Msearch"
                    type = "text" 
                    class = "search" 
                    placeholder = "Search" 
                    style={{width: "25%"}} 
                    onChange = {event => {
                        setSearchTerm(event.target.value);
                    }}
                />
               
                 <table>
                 
        

                <tr className = "Mrow" >

                <th >Descripton</th>

                <th>Amount</th>

                <th>Date</th>


                </tr>

                </table>
                <div className="ExData">
                {expenses.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.desc.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    } else if (val.Edate.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                      }
                }).map((val, key) => {
                return(
                    <div className = "EdisplayContainer" style={{width: "100%"}} key = {key}>
                    <div className = "Mrow" style={{width: "80%"}}>
                            {""}
                            <h5> {val.desc} </h5>
                            <h5> {val.Eprice} </h5>
                            <h5> {val.Edate} </h5>
                            
                            
                        </div >
                        
                            <button className="BtnEx" onClick = {() =>{
                                ConfirmDelete(val._id)
                            }}> Delete </button>
                            
                    </div>
                    
                )
                
            })}
            </div>
            
            </div>
           
     </div>



         <header> 
         <div className="total-expense">Total:Rs {totalExpenses}</div>
        </header>
     
      
     

      <form className="exform" onSubmit={sendData} >
        
      <div className="form-inner">
      
      <div class="form-groupEX">
      <label  for="Desc">Description</label>
      <input type="text" class="form-controlEX"  id="desc" placeholder="Enter Description"  onChange={(e)=>{
        setDesc(e.target.value);}}
      useRef={desc}
        required/>
      </div>

     
      <div class="form-groupEX">

      <label  for="price">Amount</label>
      <input type="number" class="form-controlEX" id="price"placeholder="Enter price..."  onChange={(e)=>{
        setPrice(e.target.value);}}
      required/>
      </div>
      
      <div class="form-groupEX">
      <label  for="date">Date</label>
      <input type="date" class="form-controlEX" id="date"placeholder="Enter date"  onChange={(e)=>{
        setDate(e.target.value);}}
     
        required/>
      </div>
      
    
               <button type="submit" class="button">Submit</button>
             </div>
            
          </form>
       </div>
       </PDFExport>
   );
           
}


