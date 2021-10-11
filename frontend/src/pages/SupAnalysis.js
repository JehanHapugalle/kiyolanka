import React ,{useState, useRef, useEffect} from "react";
import axios from 'axios';
import './SupAnalysisStyle.css'
import Logo from './image/logo.jpeg'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import '@progress/kendo-theme-default/dist/all.css';

import { Button } from "@progress/kendo-react-buttons";

export default function SupplierList(){
    const PDFExportComponent = useRef(null);

    const handledExportWithComponent = (event) => {

        PDFExportComponent.current.save();

    };
    const [suppliers, setsuppliers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        function getsuppliers(){
            axios.get("http://localhost:4000/supplier/").then ((res) => {
                setsuppliers(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getsuppliers();
    }, [])

    const update = (_id) => {
    
        const newContact = prompt("Enter New Contact: ")
        if (newContact === null) {
            return; 
        }

        const newEmail = prompt("Enter New Email: ")
        if (newEmail === null) {
              return; 
        }

        const newSupplyAmount = prompt("Enter New Supplied Amount: ")
        if (newSupplyAmount === null) {
            return; 
        }

        const newUnitPrice = prompt("Enter Unit Price: ")
        if (newUnitPrice === null) {
            return; 
        }

        const newBank = prompt("Enter New Bank: ")
        if (newBank === null) {
            return; 
        }

        const newAccountNo = prompt("Enter New Account No: ")
        if (newAccountNo === null) {
            return; 
        }

        axios.put(`http://localhost:4000/supplier/update/${_id}`, 
            {

                newContact : newContact,
                newEmail : newEmail,
                newSupplyAmount : newSupplyAmount,
                newUnitPrice : newUnitPrice,
                newBank : newBank,
                newAccountNo : newAccountNo,
                _id : _id
        
            }).then (() => {
            alert("Supplier Updated")
            setsuppliers(suppliers.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    sid : val.sid, 
                    name : val.name, 
                    contact_no : newContact, 
                    email : newEmail,
                    supply_amount : newSupplyAmount,
                    unit_price : newUnitPrice, 
                    bank : newBank,
                    account_no : newAccountNo
                } : val
            }))
        })
    };
    
    function Calcpayment(x,y){
        return x*y;
    }
    // function ConfirmDelete(id)
    // {
    //    var x = window.confirm("Are you sure you want to delete this supplier?");
    //          if (x)
    //          deleteSupplier(id);
    //          else
    //              return;
    // }

    
    // const deleteSupplier = (_id) => {
    //     axios.delete(`http://localhost:4000/supplier/delete/${_id}`).then ((res) => {
    //         alert("Supplier Deleted")
    //         setsuppliers(
    //             suppliers.filter((val) => {
    //                 return val._id != _id;
    //             })
    //         )
    //     }).catch((err) =>{
    //         alert(err.message);
    //     })
    // }

    return(
        <PDFExport ref={PDFExportComponent}>    
        <div className="supcontainer">

        <div class="imag" >

        <img src = {Logo} width = "150" alt="logo"/></div>

            <div class="supplierlist">
                <h1>Supplier Management</h1>
            </div>
            
            <div class="supretrieve">
                <h2>Supplier List</h2>
            </div>
            
            <div className="suplist" style={{width: "45%"}}>
            <div>
            <div className="supbutton-area">

                <Button primary={true} onClick={handledExportWithComponent}>Generate Report</Button>

                </div>
                    <input 
                        type = "text" 
                        class = "supsearch" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    /> 

                <table>
                    <tr className = "suprow">
                        <th>SID</th>
                        <th>Name</th>                
                        <th>Supply Amount</th>
                        <th>Unit Price</th>
                        <th>Bank</th>
                        <th>Acc No</th>
                        <th>Payment</th>
                    </tr>
                </table>

                {suppliers.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.sid.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.bank.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val        
                        }        
            
                    }).map((val, key) => {
                    return(
                        <div className = "supdisplayContainer" style={{width: "100%"}} key = {key}>
                            <div className = "suprow h5" style={{width: "80%"}}>
                                {""}
                                <h5> {val.sid} </h5>
                                <h5> {val.name} </h5>
                                <h5> {val.supply_amount} </h5>
                                <h5> {val.unit_price} </h5>
                                <h5> {val.bank} </h5>
                                <h5> {val.account_no} </h5>
                                <h5> {Calcpayment (val.supply_amount, val.unit_price )} </h5>
                            </div>
                                {/* <button className = "btn1" onClick = {() =>{
                                    update(val._id)
                                }}> Edit </button>
                                <button className = "btn2" onClick  = {() =>{
                                    ConfirmDelete(val._id)
                                }}> Delete </button> */}
                        </div>
                    )
                })}

               </div>

          </div>  

        </div>
        </PDFExport>
    );
}