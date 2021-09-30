import React ,{useState, useEffect} from "react";
import axios from 'axios';
import './SalaryDetailsStyle.css'


export default function SalaryDetails(){

    const [salaries, setsalaries] = useState([]);

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
        const newBasicSalary = prompt("Enter New Salary Amount: ")
        const newSalaryBonus = prompt("Enter Salary Bonus: ")
        const newACCno = prompt("Enter New Account Number: ")

        axios.put(`http://localhost:4000/salary/update/${_id}`, 
            {
                newBasicSalary : newBasicSalary,
                newSalaryBonus : newSalaryBonus,
                newACCno       : newACCno,
                
            }).then (() => {
            alert("Salary Updated")
            setsalaries(salaries.map((val) => {
                return val._id == _id ? 
                {
                    _id: _id,
                    SalaryEmpId: val.SalaryEmpId, 
                    SalaryEmpName: val.SalaryEmpName,
                    SalaryEmpStatus: val.SalaryEmpStatus,

                   BasicSalary :newBasicSalary, 
                   SalaryBonus: newSalaryBonus,
                   ACCno :newACCno, 
                } : val
            }))
        })
    };


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

            <div class="salary">
                <h1>Salary Management</h1>
            </div>
            
            <div class="salretrieve">
                <h2>Salary Employee List</h2>
            </div>

            <div className="list" style={{width: "45%"}}>
                {salaries.map((val) => {
                    return(
                        <div className = "displayContainer">
                            <div className = "row">
                                {""}
                                <h5> {val.SalaryEmpId} </h5>
                                <h5> {val.SalaryEmpName} </h5>
                                <h5> {val.SalaryEmpGender} </h5>
                                <h5> {val.SalaryEmpStatus} </h5>
                                <h5> {val.SalaryBonus} </h5>

                                
                            </div >
                            
                                <button className="Btn" onClick = {() =>{
                                    updateSalaries (val.userId)
                                }}> Edit </button>
                                <button className="Btn2" onClick = {() =>{
                                    deleteSalaries(val._id)
                                }}> Delete </button>
                        </div>
                    )
                })}

            </div>

        </div>
    );
}