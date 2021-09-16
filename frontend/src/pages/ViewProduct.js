import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './ViewProductStyle.css'

export default function Viewproduct(){

    const [product, setproduct] = useState([]);

    useEffect(() => {
        function getproduct(){
            axios.get("http://localhost:4000/product/").then ((res) => {
                setproduct(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getproduct();
    }, [])

    const update = (_id) => {
        const newName = prompt("Enter New Name: ")
        const newJobTitle = prompt("Enter New Job title: ")
        const newContact = prompt("Enter New Contact: ")
        const newAddress = prompt("Enter New Address: ")

        axios.put(`http://localhost:4000/employee/update/${_id}`, 
            {
                newName : newName,
                newJobTitle : newJobTitle,
                newContact : newContact,
                newAddress : newAddress,
            }).then (() => {
            alert("Product Updated")
            setproduct(product.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    eid: val.eid, 
                    gender: val.gender, 
                    name :newName, 
                    job_title : newJobTitle, 
                    date_joined : val.date_joined,
                    dob : val.dob,
                    contact : newContact, 
                    address : newAddress
                } : val
            }))
        })
    };


    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:4000/product/delete/${_id}`).then ((res) => {
            alert("Product Deleted")
            setproduct(
                product.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
        })
    }

    return(
            
        <div className="pcontainer">

            <div class="viewproduct">
                <h1>Stock Managment</h1>
            </div>
            
            <div class="pretrieve">
                <h2>View Stock</h2>
            </div>

            <div className="plist" style={{width: "45%"}}>
                {product.map((val) => {
                    return(
                        <div className = "pdisplayContainer">
                            <div className = "prow">
                                {""}
                                <h5> {val.pid} </h5>
                                <h5> {val.pname} </h5>
                                <h5> {val.weight} </h5>
                                <h5> {val.date} </h5>
                                <h5> {val.nop} </h5>
                            </div>
                                <button onClick = {() =>{
                                    update(val._id)
                                }}> Edit </button>
                                <button onClick  = {() =>{
                                    deleteProduct(val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}

            </div>

        </div>
    );
}