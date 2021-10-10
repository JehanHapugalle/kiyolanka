import React ,{useState, useEffect,useRef} from "react";
import axios from 'axios';
import './SalesHistoryStyle.css'
import Logo from './image/logo.jpeg'

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {Button,} from "@progress/kendo-react-buttons";
import '@progress/kendo-theme-default/dist/all.css';

export default function SalesHistory(){

    const [sale, setsale] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const pdfExportComponent = useRef (null);
    const handleExportWithComponent = (event) => {
    pdfExportComponent .current.save();
   };

    useEffect(() => {
        function getsale(){
            axios.get("http://localhost:4000/sale/").then ((res) => {
                setsale(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getsale();
    }, [])

    const updateSales = (_id) => {  
        const scus_name = prompt("Enter New Name: ")
        if (scus_name === null) {
            return; 
        }
        const scon_number = prompt("Enter New Contact Number: ")
        if (scon_number === null) {
            return; 
        }
        // const s_email = prompt("Enter New E-mail: ")
        // if (s_email === null) {
        //     return; 
        // }
        const s_amount = prompt("Enter the Correct Amount: ")
        if (s_amount === null) {
            return; 
        }

        axios.put(`http://localhost:4000/sale/update/${_id}`, 
            {
                scus_name : scus_name,
                scon_number : scon_number,
                // s_email : s_email,
                s_amount : s_amount,
                _id : _id
            }).then (() => {
                alert("Sale Updated")
                setsale(sale.map((val) => {
                    return val._id == _id ? {
                        _id : _id,
                        scus_name : scus_name,
                        scon_number : scon_number,
                        ssale_id : val.ssale_id,
                        // s_email : s_email,
                        s_amount : s_amount
                    } : val;
                }))
            })
    };

    function ConfirmDelete(_id)

    {
        var x = window.confirm("Are you sure you want to delete this sale?");
        if (x)
            deleteSale(_id);
        else
            return;
    }

    const deleteSale = (_id) => {
        axios.delete(`http://localhost:4000/sale/delete/${_id}`).then ((res) => {
            alert("Sale Deleted")
            setsale(
                sale.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
        })
    }

    return(
     
    <PDFExport ref={pdfExportComponent}margin={{top: 50, right: 50}} >
    <div className="salecontainer">
    <div class="saleimag" >
    <img src = {Logo} width = "150" alt="logo"/>
    </div>
    
    <div class="sale"><h1>Sales Management 
    </h1></div>
     
    <div class="saleadd"><h2>Sales History
    </h2></div>


            <div className="salelist" style={{width: "45%"}}>

                <div>
                <div className="scalbutton-area">
           <Button primary={true} onClick={handleExportWithComponent}>Generate Report</Button>
         </div>
                    <input 
                        type = "text" 
                        class = "salesearch" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    <table>

                        <tr className = "salerow">

                            <th>NAME</th>
                            <th>TEL NO</th>
                            <th>DATE</th>
                            <th>SALE ID</th>
                            <th>AMOUNT</th>

                        </tr>

                        </table>

                    {sale.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.scus_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        // } else if (val.s_date.toLowerCase().includes(searchTerm.toLowerCase())){
                        //     return val
                        }
                        // } else if (val.s_email.toLowerCase().includes(searchTerm.toLowerCase())){
                        //     return val
                        // } else if (val.s_amount.toLowerCase().includes(searchTerm.toLowerCase())){
                        //     return val
                        // } else if (val.s_date.toLowerCase().includes(searchTerm.toLowerCase())){
                        //     return val
                        /*} else if (val.scon_number.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.ssale_id.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val*/
                        
                    }).map((val, key) => {
                        return(
                            <div className = "saledisplayContainer" style={{width: "100%"}} key = {key}>
                                <div className = "salerow" style={{width: "80%"}}>
                                    {""}
                                    <h5> {val.scus_name} </h5>
                                    <h5> {val.scon_number} </h5>
                                    <h5> {val.s_date} </h5>
                                    <h5> {val.ssale_id} </h5>
                                    {/* <h5> {val.s_email} </h5> */}
                                    <h5> {val.s_amount} </h5>
                                </div>
                                    <button onClick = {() =>{
                                            updateSales(val._id)
                                        }}> Edit </button>
                                        <button onClick  = {() =>{
                                            ConfirmDelete(val._id)
                                        }}> Delete </button>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
        </PDFExport>
    );
}