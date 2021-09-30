import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './SalaryDetailsStyle.css'
import Logo from './image/logo.jpeg'

export default function SalaryDetails(){

    const [salaries, setsalaries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        function getsalaries(){
            axios.get("http://localhost:4000/salary/").then ((res) => {
                setsalaries(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getsalaries();
    }, [])


    const updateSalaries = (_id) => {  
        const BasicSalary = prompt("Enter New Salary Amount: ")
        if (BasicSalary === null) {
            return; 
        }
        const SalaryBonus = prompt("Enter New Salary Bonus: ")
        if (SalaryBonus=== null) {
            return; 
        }
        const SalaryEmpACCno = prompt("Enter New Account Number: ")
        if (SalaryEmpACCno === null) {
            return; 
        }
        
       

        axios.put(`http://localhost:4000/salary/update/${_id}`, 
            {
                BasicSalary : BasicSalary,
                SalaryBonus : SalaryBonus,
                SalaryEmpACCno : SalaryEmpACCno,
                _id : _id
            }).then (() => {
                alert("Salary Updated")
                setsalaries(salaries.map((val) => {
                    return val._id == _id ? 
                    {
                        _id: _id,
                        SalaryEmpId: val.SalaryEmpId, 
                        SalaryEmpName: val.SalaryEmpName,
                        SalaryEmpStatus: val.SalaryEmpStatus,
    
                       BasicSalary :BasicSalary, 
                       SalaryBonus: SalaryBonus,
                       SalaryEmpACCno :SalaryEmpACCno
                    } : val
                }))
            })
        };
        function ConfirmDelete(id)
        {
            var x = window.confirm("Are you sure you want to delete this salary employee?");
            if (x)
                deleteSalaries(id);
            else
                return;
        }

        const deleteSalaries = (_id) => {
            axios.delete(`http://localhost:4000/salary/delete/${_id}`).then ((res) => {
                alert("Salary Employee Deleted")
                setsalaries(
                    salaries.filter((val) => {
                        return val._id != _id;
                    })
                )
            }).catch((err) =>{
                alert(err.message);
            })
        }

    return(
            
        <div className="salcontainer">
            <div class="imag" >
<img src = {Logo} width = "150" alt="logo"/></div>
            <div class="salary">
                <h1>Salary Management</h1>
            </div>
            <div class="salretrieve">
                <h2>Salary Employee List</h2>
            </div>
            <div className="list" style={{width: "45%"}}>
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

<table >

<tr className = "salrow">

    <th>EID</th>

    <th>Name</th>

    <th>Acc No</th>

    <th>Status</th>

    <th>Bonus</th>

    <th>Basic Sal</th>

    

</tr>

</table>
                    {salaries.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.SalaryEmpId.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.SalaryEmpName.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.SalaryEmpStatus.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                    
                        } 
                    }).map((val, key) => {
                        return(
                            <div className = "displayContainer" style={{width: "100%"}} key = {key}>
                                <div className = "row" style={{width: "80%"}}>
                                    {""}
                                    <h5> {val.SalaryEmpId} </h5>
                                <h5> {val.SalaryEmpName} </h5>
                                <h5> {val.SalaryEmpACCno} </h5>
                                <h5> {val.SalaryEmpStatus} </h5>
                                <h5> {val.SalaryBonus} </h5> 
                                <h5> {val.BasicSalary} </h5>

                                </div>
                                    <button onClick = {() =>{
                                            updateSalaries(val._id)
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
    );
}