import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './ViewProductStyle.css'
import Logo from './image/logo.jpeg'

export default function Viewproduct(){

    const [product, setproduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
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

    const updateProduct = (_id) => {
        const pname = prompt("Enter New Product Name: ")
        if (pname === null) {
            return; 
        }
        const weight = prompt("Enter New Weight: ")
        if (weight === null) {
            return; 
        }
        const date = prompt("Enter New Date: ")
        if (date === null) {
            return; 
        }
        const nop = prompt("Enter New Number of Products: ")
        if (nop === null) {
            return; 
        }

        axios.put(`http://localhost:4000/product/update/${_id}`, 
            {
                pname : pname,
                weight : weight,
                date : date,
                nop : nop,
                _id : _id
            }).then (() => {
            alert("Product Updated")
            setproduct(product.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    pid: val.pid, 
                    pname : pname,
                    weight : weight,
                    date : date,
                    nop : nop,
                } : val;
            }))
        })
    };

    function ConfirmDelete(id)

    {

        var x = window.confirm("Are you sure you want to delete this product?");
        if (x)
            deleteProduct(id);
        else
            return;
    }

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
            <div class="pimag" >
            <img src = {Logo} width = "150" alt="logo"/>
            </div>
            <div class="viewproduct">
                <h1>Stock Managment</h1>
            </div>
            
            <div class="pretrieve">
                <h2>View Stock</h2>
            </div>

            <div className="plist" style={{width: "45%"}}>

                <div>
                    <input
                         type = "text" 
                         class = "search" 
                         placeholder = "Search" 
                         style={{width: "25%"}} 
                         onChange = {event => {
                             setSearchTerm(event.target.value);
                         }}
                     />

                        <table>
                        <tr className = "prow">
                            <pth>PID</pth>
                            <pth>NAME</pth>
                            <pth>WEIGHT(kg)</pth>
                            <pth>DATE</pth>
                            <pth>NOP</pth>
                        </tr>
                        </table>
                    <div class= "pdata">
                    {product.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.pid.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.pname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        // } else if (val.weight.toLowerCase().includes(searchTerm.toLowerCase())){
                        //     return val
                        // } else if (val.nop.includes(searchTerm)){
                        //     return val
                        } 

                    }).map((val) => {
                    return(
                        <div className = "pdisplayContainer" style={{width: "100%"}}>
                            <div className = "prow" style={{width: "80%"}}>
                                {""}
                                <h5> {val.pid} </h5>
                                <h5> {val.pname} </h5>
                                <h5> {val.weight} </h5>
                                <h5> {val.date} </h5>
                                <h5> {val.nop} </h5>
                            </div>
                                <button className="PBtn" onClick = {() =>{
                                    updateProduct(val._id)
                                }}> Edit </button>
                                <button className="PBtn2" onClick  = {() =>{
                                    ConfirmDelete(val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}
                </div>
                </div>

            </div>

        </div>
    );
}