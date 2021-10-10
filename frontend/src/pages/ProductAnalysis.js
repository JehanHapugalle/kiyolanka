import React ,{useState, useEffect, useRef} from "react";
import axios from 'axios';
import './ProductAnalysisStyle.css'
import Logo from './image/logo.jpeg'
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function ProductAnalysis(){

    const PDFExportComponent = useRef(null);
    const handledExportWithComponent = (event) => {
        PDFExportComponent.current.save();

    };
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

    function calcweight(x,y){

        return x*y;
    }

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
        
        <PDFExport ref={PDFExportComponent} margin={{top: 50, right: 50}}>
            
        <div className="pacontainer">
            <div class="paimag" >
            <img src = {Logo} width = "150" alt="logo"/>
            </div>
            <div class="productanalysis">
                <h1>Stock Managment</h1>
            </div>
            
            <div class="panalysis">
                <h2>Stock Analysis</h2>
            </div>

            <div className="palist" style={{width: "45%"}}>

                <div>
                    <div style={{width: "100%"}}>
                    <input
                         type = "text" 
                         class = "search" 
                         placeholder = "Search" 
                         style={{width: "25%"}} 
                         onChange = {event => {
                             setSearchTerm(event.target.value);
                         }}
                     />
                         
                        <Button className="probutton-area"  primary={true} onClick={handledExportWithComponent}>GENERATE REPORT</Button>
                       
                        </div>
                        <table>
                        <tr className = "parow">
                            <pa4th>PID</pa4th>
                            <pa4th>NAME</pa4th>
                            <pa4th>WEIGHT(kg)</pa4th>
                            <pa4th>DATE</pa4th>
                            <pa4th>NOP</pa4th>
                            <pa4th>TOTAL WEIGHT(kg)</pa4th>
                        </tr>
                        </table>
                       
                        <div class= "padata">
                    {product.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.pid.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.pname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.date.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        // } else if (val.weight.toLowerCase().includes(searchTerm.toLowerCase())){
                        //     return val
                        // } else if (val.nop.includes(searchTerm)){
                        //     return val
                        } 

                    }).map((val) => {
                    return(
                        <div className = "padisplayContainer" style={{width: "100%"}}>
                            <div className = "parow" style={{width: "80%"}}>
                                {""}
                                <h5> {val.pid} </h5>
                                <h5> {val.pname} </h5>
                                <h5> {val.weight} </h5>
                                <h5> {val.date} </h5>
                                <h5> {val.nop} </h5>
                                <h5> {calcweight(val.weight,val.nop)} </h5>
                            </div>
                                {/* <button className="PBtn" onClick = {() =>{
                                    updateProduct(val._id)
                                }}> Edit </button>
                                <button className="PBtn2" onClick  = {() =>{
                                    ConfirmDelete(val._id)
                                }}> Delete </button> */}
                        </div>
                    )
                })}
                </div>
                </div>

            </div>

        </div>
        </PDFExport>
    );
}