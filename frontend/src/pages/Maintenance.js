import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './MaintenanceListStyle.css'
import Logo from './image/logo.jpeg'

export default function TransportList(){


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
        const did = prompt("Enter driver id: ")
        if ( did === null) {
            return; 
        }
        const dname = prompt("Enter New driver name: ")
        if ( dname === null) {
            return; 
        }
        const licence_no = prompt("Enter New licence number: ")
        if ( licence_no === null) {
            return; 
        }

        const vehicle_no = prompt("Enter New vehicle number: ")
        if ( vehicle_no === null) {
            return; 
        }

        axios.put(`http://localhost:4000/transport/update/${_id}`, 
            {
                did : did,
                dname : dname,
                licence_no : licence_no,
                vehicle_no : vehicle_no,
                _id : _id
                
            }).then (() => {
            alert("Transport Updated")
            settransports(transports.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    did: did,
                    dname: dname, 
                    date: val.date, 
                    licence_no :licence_no, 
                    vehicle_no : vehicle_no,
                    month : val.month,
                    time : val.time 
                } : val;
            }))
        })
    };


    const deletetransports = (_id) => {
        axios.delete(`http://localhost:4000/transport/delete/${_id}`).then ((res) => {
            alert("Transport Deleted")
            settransports(
                transports.filter((val) => {
                    return val._id != _id;
                })
            )
        }).catch((err) =>{
            alert(err.message);
        })
    }


    return(
            
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



    <th>Did</th>

    <th>Dname</th>

    <th>Date</th>

    <th>Licence No</th>

    <th>vehicle No</th>

    <th>Month</th>

    <th>Time</th>

    

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
                        } else if (val.time.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                        
                        } else if (val.month.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }

                    }).map((val, key) => {
                    return(
                        <div className = "tradisplayContainer" style={{width: "100%"}} key = {key}>
                        <div className = "trarow" style={{width: "80%"}}>
                                {""}
                                <h5> {val.did} </h5>
                                <h5> {val.dname} </h5>
                                <h5> {val.date} </h5>
                                <h5> {val.licence_no} </h5>
                                <h5> {val.vehicle_no} </h5>
                                <h5> {val.month} </h5>
                                <h5> {val.time} </h5>
                                
                            </div >
                            
                                <button className="traBtn" onClick = {() =>{
                                    updateTransports (val._id)
                                }}> Edit </button>
                                <button className="traBtn2" onClick = {() =>{
                                    deletetransports (val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}
                </div>

            </div>

        </div>
    );
}
