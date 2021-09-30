import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './ViewSupplierListStyle.css'
import Logo from './image/logo.jpeg'

export default function SupplierList(){

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
        const newAddress = prompt("Enter New Address: ")
        if (newAddress === null) {
           return; 
        }

        const newContact = prompt("Enter New Contact: ")
        if (newContact === null) {
            return; 
        }

        const newEmail = prompt("Enter New Email: ")
        if (newEmail === null) {
              return; 
        }

        const newSupplyScale = prompt("Enter New Supply Scale: ")
        if (newSupplyScale === null) {
            return; 
        }

        const newPaymentType = prompt("Enter New Payment Type: ")
        if (newPaymentType === null) {
            return; 
        }

        const newBank = prompt("Enter New Bank: ")
        if (newBank === null) {
            return; 
        }

        const newAccountNo = prompt("Enter New Account No: ")
        if (newAddress === null) {
            return; 
        }

        axios.put(`http://localhost:4000/supplier/update/${_id}`, 
            {
                newAddress : newAddress,
                newContact : newContact,
                newEmail : newEmail,
                newSupplyScale : newSupplyScale,
                newPaymentType : newPaymentType,
                newBank : newBank,
                newAccountNo : newAccountNo,
        
            }).then (() => {
            alert("Supplier Updated")
            setsuppliers(suppliers.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    name : val.name, 
                    nic_no : val.nic_no, 
                    address : newAddress, 
                    contact_no : newContact, 
                    email : newEmail,
                    date_of_birth : val.date_of_birth,
                    supply_scale : newSupplyScale, 
                    payment_type : newPaymentType,
                    bank : newBank,
                    account_no : newAccountNo
                } : val
            }))
        })
    };

    function ConfirmDelete(id)
    {
       var x = window.confirm("Are you sure you want to delete this supplier?");
             if (x)
             deleteSupplier(id);
             else
                 return;
    }

    
    const deleteSupplier = (_id) => {
        axios.delete(`http://localhost:4000/supplier/delete/${_id}`).then ((res) => {
            alert("Supplier Deleted")
            setsuppliers(
                suppliers.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
        })
    }

    return(
            
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
                        <th>Name</th>
                        <th>NIC No</th>
                        <th>Address</th>
                        <th>Con No</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Sup Scale</th>
                        <th>Pay Type</th>
                        <th>Bank</th>
                        <th>Acc No</th>
                    </tr>
                </table>

                {suppliers.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.address.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.payment_type.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.bank.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val        
                        }        
            
                    }).map((val, key) => {
                    return(
                        <div className = "supdisplayContainer" style={{width: "100%"}} key = {key}>
                            <div className = "suprow h5" style={{width: "80%"}}>
                                {""}
                                <h5> {val.name} </h5>
                                <h5> {val.nic_no} </h5>
                                <h5> {val.address} </h5>
                                <h5> {val.contact_no} </h5>
                                <h5> {val.email} </h5>
                                <h5> {val.date_of_birth} </h5>
                                <h5> {val.supply_scale} </h5>
                                <h5> {val.payment_type} </h5>
                                <h5> {val.bank} </h5>
                                <h5> {val.account_no} </h5>
                            </div>
                                <button className = "btn1" onClick = {() =>{
                                    update(val._id)
                                }}> Edit </button>
                                <button className = "btn2" onClick  = {() =>{
                                    ConfirmDelete(val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}

               </div>

          </div>  

        </div>
    );
}