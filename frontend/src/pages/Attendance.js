import React ,{useState, useEffect, useRef} from "react";
import axios from 'axios';
import './Attendance.css'
import Logo from './image/logo.jpeg'
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function Attendance() {

    const[month, setmonth]= useState("");
    const[week, setweek]= useState("");
    const[eid, seteid]= useState("");
    const[name, setname]= useState("");
    const[monday]= useState(false);
    const[tuesday]= useState(false);
    const[wednesday]= useState(false);
    const[thursday]= useState(false);
    const[friday]= useState(false);
    const[saturday]= useState(false);
    const[sunday]= useState(false);
    var total = 0;


    function sendData(e) {
        e.preventDefault();

        const newAttendance = {
            month,
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
            setattendance([...attendance, {
                eid : eid,
                name : name,
                month : month,
                week : week,
                monday : monday,
                tuesday : tuesday,
                wednesday : wednesday,
                thursday : thursday,
                friday : friday,
                saturday : saturday,
                sunday : sunday,
                total : total
            }]);
        });
    }

    const [attendance, setattendance] = useState([]);
    const [searchTermEmployee, setSearchTermEmployee] = useState('')
    const [searchTermMonth, setsearchTermMonth] = useState('')
    const [searchTermWeek, setSearchTermWeek] = useState('')

    attendance.sort(function (a, b) {
        return a.name.charAt(2).localeCompare(b.name.charAt(2)) 
        || a.month.localeCompare(b.month) 
        || a.week.localeCompare(b.week)
    });

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

    function mark(value) {
        if (value == true)
            return 1
        else
            return 0
    }

    const markAttendance = (_id) => {  

        const monday = prompt("Monday: ", 0)
        if (monday == 1)
            total++
        else if (monday == null) 
            return; 
        
        const tuesday = prompt("Tuesday: ", 0)
        if (tuesday == 1)
            total++
        else if (tuesday == null) 
            return; 
        
        const wednesday = prompt("Wednesday: ", 0)
        if (wednesday == 1)
            total++
        else if (wednesday == null) 
            return; 
    
        const thursday = prompt("Thursday: ", 0)
        if (thursday == 1)
            total++
        else if (thursday == null)
            return; 

        const friday = prompt("Friday: ", 0)
        if (friday == 1)
            total++
        else if (friday == null) 
            return; 
    
        const saturday = prompt("Saturday: ", 0)
        if (saturday == 1)
            total++
        else if (saturday == null) 
            return; 
        
        const sunday = prompt("Sunday: ", 0)
        if (sunday == 1)
            total++
        else if (sunday == null) 
            return; 

        axios.put(`http://localhost:4000/attendance/update/${_id}`, 
            {
                monday : monday,
                tuesday : tuesday,
                wednesday : wednesday,
                thursday : thursday,
                friday : friday,
                saturday : saturday,
                sunday : sunday,
                total : total,
                _id : _id
            }).then (() => {
                alert("Attendance Updated")
                setattendance(attendance.map((val) => {
                    return val._id == _id ? 
                    {
                        _id : _id,
                        eid : val.eid,
                        name : val.name,
                        month : val.month,
                        week : val.week,
                        monday : monday,
                        tuesday : tuesday,
                        wednesday : wednesday,
                        thursday : thursday,
                        friday : friday,
                        saturday : saturday,
                        sunday : sunday,
                        total : total
                    } : val;
                }))
            })
    };

    function deleteEmployee(_id) {
    
        var x = window.confirm("Are you sure you want to delete this employee?");

        if (x) {
            axios.delete(`http://localhost:4000/attendance/delete/${_id}`).then ((res) => {
                alert("Attendance Deleted")
                setattendance(
                    attendance.filter((val) => {
                        return val._id != _id;
                    })
                )
            }).catch((err) =>{
                alert(err.message);
            })
        }
        else
            return;
    }

    const pdfExportComponent = useRef(null);
    
    const handleExportWithComponent = (event) => {
        var x = window.confirm("Are you sure you want to generate this report?");
        if (x)
            pdfExportComponent.current.save();
        else
            return;
    }

    return(  

        <PDFExport ref = {pdfExportComponent} margin={{top: 100, right: -400, bottom: -370}}> 
        
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

                <div className="attendlist" style={{width: "45%"}}>

                    <div style={{width: "100%"}}>

                        <input type = "text" class = "search" placeholder = "Search" style={{width: "21%"}} 
                            onChange = {event => {
                                setSearchTermEmployee(event.target.value);
                            }}
                        />

                        <select class="attendsearch" id="searchmonth" style={{width: "21%"}} 
                            onChange = {event => {
                                setsearchTermMonth(event.target.value);
                            }}
                        >
                                <option value="" disabled selected hidden> Select Month </option>
                                <option value="" > All Months </option>
                                <option value="Jan"> January </option>
                                <option value="Feb"> February </option>
                                <option value="Mar"> March </option>
                                <option value="Apr"> April </option>
                                <option value="May"> May </option>
                                <option value="Jun"> June </option>
                                <option value="Jul"> July </option>
                                <option value="Aug"> August </option>
                                <option value="Sep"> September </option>
                                <option value="Oct"> October </option>
                                <option value="Nov"> November </option>
                                <option value="Dec"> December </option>
                        </select>

                        <select class="attendsearch" id="searchweek" style={{width: "21%"}}
                            onChange = {event => {
                                setSearchTermWeek(event.target.value);
                            }}
                        >
                                <option value="" disabled selected hidden> Select Week </option>
                                <option value="" > All Weeks </option>
                                <option value="W1"> Week 1 </option>
                                <option value="W2"> Week 2 </option>
                                <option value="W3"> Week 3 </option>
                                <option value="W4"> Week 4 </option>
                        </select>
                            
                        <Button class="report" primary = {true} onClick={handleExportWithComponent} style={{width: "14%"}}> Generate Report </Button>

                    </div>  

                    <table>
                        <tr className = "attendrow">
                                    <th>EID</th>
                                    <th>Name</th>
                                    <th>Month</th>
                                    <th>Week</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                    <th>Sun</th>
                                    <th>Total</th>
                        </tr>
                    </table>

                    <div class="data">

                        {attendance.filter((val) => {
                                if (searchTermEmployee == "" && searchTermMonth == "" && searchTermWeek == "") 
                                    return val
                                else if ((val.eid.toLowerCase().includes(searchTermEmployee.toLowerCase()) 
                                            || (val.name.toLowerCase().includes(searchTermEmployee.toLowerCase())))
                                            && val.month.includes(searchTermMonth) 
                                            && val.week.includes(searchTermWeek))
                                    return val
                        }).map((val, key) => {
                            return(
                                    <div className="displayattendContainer" style={{ width: "100%" }} key={key}>
                                         <div className="attendrow" style={{ width: "80%" }}>
                                            {""}
                                            <h5> {val.eid} </h5>
                                            <h5> {val.name} </h5>
                                            <h5> {val.month} </h5>
                                            <h5> {val.week} </h5>
                                            <h5> {mark(val.monday)} </h5>
                                            <h5> {mark(val.tuesday)} </h5>
                                            <h5> {mark(val.wednesday)} </h5>
                                            <h5> {mark(val.thursday)} </h5>
                                            <h5> {mark(val.friday)} </h5>
                                            <h5> {mark(val.saturday)} </h5>
                                            <h5> {mark(val.sunday)} </h5>
                                            <h5> {val.total} </h5>
                                        </div>

                                        <button onClick = {() =>{
                                            markAttendance(val._id)
                                        }}> Mark </button>
                                    
                                        <button onClick  = {() =>{
                                            deleteEmployee(val._id)
                                        }}> Delete </button>

                                    </div>
                            )
                        })}
                    </div>
                </div> 
                
                <form onSubmit={sendData} style={{width: "45%", display:"flex"}}>

                    <div style={{width: "50%"}}>

                        <div class="form-group">
                        
                            <label for="EmployeeID">Employee ID</label>
                            <input type="text" class="form-control" id="eid" pattern="[D,M,S]{1}[0-9]{4}" placeholder="Format: [D,M,S](1) [0-9](4)" onChange={(e)=>{seteid(e.target.value);}} required/>
                                    
                        </div>

                        <div class="form-group">

                            <label  for="EmployeeName">Employee Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter Employee Name" onChange={(e)=>{setname(e.target.value);}} required/>
                                        
                        </div>

                    </div>

                    <div style={{width: "50%"}}>

                        <div class="form-group">
                    
                            <label for="Month">Month</label>
                            <select id="month" onChange={(e)=>{setmonth(e.target.value);}} required>
                                <option value="" disabled selected hidden> Select Month </option>
                                <option value="Jan"> January </option>
                                <option value="Feb"> February </option>
                                <option value="Mar"> March </option>
                                <option value="Apr"> April </option>
                                <option value="May"> May </option>
                                <option value="Jun"> June </option>
                                <option value="Jul"> July </option>
                                <option value="Aug"> August </option>
                                <option value="Sep"> September </option>
                                <option value="Oct"> October </option>
                                <option value="Nov"> November </option>
                                <option value="Dec"> December </option>
                            </select>
                                
                        </div>

                        <div class="form-group">

                            <label  for="Week">Week</label>
                            <select id="week" onChange={(e)=>{setweek(e.target.value);}} required>
                                <option value="" disabled selected hidden> Select Week </option>
                                <option value="W1"> Week 1 </option>
                                <option value="W2"> Week 2 </option>
                                <option value="W3"> Week 3 </option>
                                <option value="W4"> Week 4 </option>
                            </select>
                                    
                        </div>
                        
                        <button class="addattend" type="submit">Add Employee</button>
                
                    </div>  
                        
                </form>
        
            </div>
            
        </PDFExport> 
    );
}