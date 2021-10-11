import React ,{useState, useRef, useEffect} from "react";
import axios from 'axios';
import './MaintenanceListStyle.css'
import Logo from './image/logo.jpeg'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import '@progress/kendo-theme-default/dist/all.css';



import { Button } from "@progress/kendo-react-buttons";
export default function TransportList(){
    const PDFExportComponent = useRef(null);

    const handledExportWithComponent = (event) => {
        
        PDFExportComponent.current.save();
    };

    const [transports, settransports] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        function gettransports(){
            axios.get("http://localhost:4000/transport/").then ((res) => {
                settransports(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        gettransports();
    }, [])
    
    const updateTransports = (_id) => {  
        
        const newDname = prompt("Enter New driver name: ")
        if ( newDname === null) {
            return; 
        }
        const newLicenceNo = prompt("Enter New licence number: ")
        if ( newLicenceNo === null) {
            return; 
        }

        const newVehicleNo = prompt("Enter New vehicle number: ")
        if ( newVehicleNo === null) {
            return; 
        }
        const newVehiclePayment = prompt("Enter New vehicle payment: ")
        if ( newVehiclePayment === null) {
            return; 
        }

        const newDriverPayment = prompt("Enter New driver payment: ")
        if ( newDriverPayment === null) {
            return; 
        }

        axios.put(`http://localhost:4000/transport/update/${_id}`, 
            {
                newDname : newDname,
                newLicenceNo : newLicenceNo,
                newvehicleNo : newVehicleNo,
                newVehiclePayment : newVehiclePayment,
                newDriverPayment : newDriverPayment,
                _id : _id
                
            }).then (() => {
            alert("Transport Updated")
            settransports(transports.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    did: val.did,
                    dname: newDname, 
                    date: val.date, 
                    licence_no : newLicenceNo, 
                    vehicle_no : newVehicleNo,
                    vehicle_payment : newVehiclePayment,
                    driver_payment : newDriverPayment 
                } : val;
            }))
        })
    };

    function Calctotal(x,y){

        return x+y;

    }
    // const deletetransports = (_id) => {
    //     axios.delete(`http://localhost:4000/transport/delete/${_id}`).then ((res) => {
    //         alert("Transport Deleted")
    //         settransports(
    //             transports.filter((val) => {
    //                 return val._id != _id;
    //             })
    //         )
    //     }).catch((err) =>{
    //         alert(err.message);
    //     })
    // }


    return(
        <PDFExport ref={PDFExportComponent} paperSize="A0">      
        <div className="tracontainer">

            <div class="imag" >



<img src = {Logo} width = "150" alt="logo"/></div>

            <div class="tratransport">
                <h1>Transport Managment</h1>
            </div>
            
            <div class="traretrieve">
                <h2>Transport List</h2>
            </div>

            <div className="tralist" style={{width: "45%"}}>
            <div>
            <div className="trabutton-area">
           
                  <Button primary={true} onClick={handledExportWithComponent}>GENERATE REPORT</Button>
            </div>
                    <input 
                        type = "text" 
                        class = "trasearch" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    <table>



<tr className = "trarow">




    <th>Dname</th>

    <th>vehicl maintaince payment</th>

    <th>Date</th>

    <th>Licence No</th>

    <th>driver payment</th>

    <th>vehicle No</th>

    <th>total payment</th>

    

</tr>



</table>


                    {transports.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.dname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.licence_no.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.vehicle_no.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val                         
                        }

                    }).map((val, key) => {
                    return(
                        <div className = "tradisplayContainer" style={{width: "100%"}} key = {key}>
                        <div className = "trarow" style={{width: "80%"}}>
                                {""}
                                <h5> {val.dname} </h5>
                                <h5> {val.vehicle_payment} </h5>
                                <h5> {val.date} </h5>
                                <h5> {val.licence_no} </h5>
                                <h5> {val.driver_payment} </h5>
                                <h5> {val.vehicle_no} </h5>
                                <h5> {Calctotal (val.driver_payment, val.vehicle_payment )} </h5>
                                
                            </div >
                            
                                {/* <button className="traBtn" onClick = {() =>{
                                    updateTransports (val._id)
                                }}> Edit </button>
                                <button className="traBtn2" onClick = {() =>{
                                    deletetransports (val._id)
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
