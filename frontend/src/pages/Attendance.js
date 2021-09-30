import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './Attendance.css'
import Logo from './image/logo.jpeg'

export default function Attendance(){

    const[week]= useState("");
    const[eid, seteid]= useState("");
    const[name, setname]= useState("");
    const[monday]= useState("");
    const[tuesday]= useState("");
    const[wednesday]= useState("");
    const[thursday]= useState("");
    const[friday]= useState("");
    const[saturday]= useState("");
    const[sunday]= useState("");
    const[total]= useState("");

    function sendData(e){
        e.preventDefault();

        const newAttendance={
            week,
            eid,
            name,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
            total
        }

        axios.post("http://localhost:4000/attendance/add", newAttendance).then (() => {
            alert("Employee Added")
        }).catch((err) =>{
            alert(err)
        })
    }

    const [attendance, setattendance] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        function getattendance(){
            axios.get("http://localhost:4000/attendance/").then ((res) => {
                setattendance(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getattendance();
    }, [])

    function mark(value)
    {
        if (value==true){
            return <input type="checkbox" checked/>
        }else{
            return <input type="checkbox"/>
        }
    }

    return(
        
        <div className="container">
        
            <div class="eimage" >
                    <img src = {Logo} width = "150" alt="logo"/>
            </div>
        
            <div class="attendance">
                <h1>Employee Management</h1>
            </div>
            
            <div class="attendancesub">
                <h2>Attendance</h2>
            </div>
           
            <div className="list" style={{width: "45%"}}>
                <div>
                    <input 
                        type = "text" 
                        class = "search" 
                        placeholder = "Week" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                    <input 
                        type = "text" 
                        class = "search" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />      
                    
                    <button type="submit" class="btn btn-primary">Generate Report</button>

                    <table>
                        <tr className = "row">
                            <th>EID</th>
                            <th>Name</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                            <th>Total</th>
                        </tr>
                    </table>
                        
                    {attendance.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.week.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.eid.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((val, key) => {
                        return(
                            <div className="displayContainer" style={{ width: "100%" }} key={key}>
                                <div className="row" style={{ width: "80%" }}>
                                    {""}
                                    <h5> {val.eid} </h5>
                                    <h5> {val.name} </h5>
                                    <h5> {mark(val.monday)} </h5>
                                    <h5> {mark(val.tuesday)} </h5>
                                    <h5> {mark(val.wednesday)} </h5>
                                    <h5> {mark(val.thursday)} </h5>
                                    <h5> {mark(val.friday)} </h5>
                                    <h5> {mark(val.saturday)} </h5>
                                    <h5> {mark(val.sunday)} </h5>
                                    <h5> {val.total} </h5>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div> 

            <form onSubmit={sendData} style={{width: "45%", display:"flex"}}>

                <div class="form-group" style={{width: "50%"}}>
            
                    <label for="EmployeeID">Employee ID</label>
                    <input type="text" class="form-control" id="eid" pattern="[D,M,S]{1}[0-9]{4}" placeholder="Format: [D,M,S](1) [0-9](4)" onChange={(e)=>{seteid(e.target.value);}} required/>
                        
                </div>

                <div class="form-group" style={{width: "50%"}}>

                    <label  for="EmployeeName">Employee Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Employee Name" onChange={(e)=>{setname(e.target.value);}} required/>
                            
                </div>

                <button type="submit" class="btn btn-primary">Add Employee</button>
                    
            </form>
                     
        </div>   
    );

   
}