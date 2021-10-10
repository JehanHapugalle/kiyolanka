import React ,{useState, useRef, useEffect} from "react";
import axios from 'axios';
import './SalAnalysisStyle.css'
import Logo from './image/logo.jpeg'
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";



export default function SalaryDetails(){
    const PDFExportComponent = useRef(null);
    const handledExportWithComponent = (event) => {
        PDFExportComponent.current.save();
    };

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
                        SalaryEmpMonth: val.SalaryEmpMonth,
    
                       BasicSalary :BasicSalary, 
                       SalaryBonus: SalaryBonus,
                       SalaryEmpACCno :SalaryEmpACCno
                    } : val
                }))
            })
        };

         function calcSal(x, y){
             return x+y;
         }

         function calcEpf(x){ 
             return x * 8/100;
             
         }

         function calcEtf(x){
             return x*12/100;
         }

         function calcAllow(x){
             if (x>50000)
             return 2000;
              else if (x>30000)
              return 1000
              else 
              return 0;

         }
         

        
        // function ConfirmDelete(id)
        // {
        //     var x = window.confirm("Are you sure you want to delete this salary employee?");
        //     if (x)
        //         deleteSalaries(id);
        //     else
        //         return;
        // }

        // const deleteSalaries = (_id) => {
        //     axios.delete(`http://localhost:4000/salary/delete/${_id}`).then ((res) => {
        //         alert("Salary Employee Deleted")
        //         setsalaries(
        //             salaries.filter((val) => {
        //                 return val._id != _id;
        //             })
        //         )
        //     }).catch((err) =>{
        //         alert(err.message);
        //     })
        // }

    return(
         <PDFExport ref={PDFExportComponent} >
        <div className="salcontainer">
            <div class="imag" >
<img src = {Logo} width = "150" alt="logo"/></div>
            <div class="salary">
                <h1>Salary Management</h1>
            </div>
            <div class="salretrieve">
                <h2>Salary Analysis</h2>
            </div>
            <div className="list" style={{width: "45%"}}>
                <div className="salbutton-area">
               
            <Button  primary={true} onClick={handledExportWithComponent}>GENERATE REPORT</Button>
            
            </div>
                    { <input 
                        type = "text" 
                        class = "search" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    /> }
    
<table >

<tr className = "salAnrow">

    <th>EID</th>

    <th>Name</th>

    <th>Acc No</th>

    <th>Month</th>

    <th>Bonus</th>

    <th>Basic Salary</th>

    <th>Net Salary</th>

    <th>EPF </th>

    <th>ETF</th>
    
    <th>Allowance </th>

</tr>

</table>
<div class = "salAdata" >
                    {salaries.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.SalaryEmpId.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.SalaryEmpName.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.SalaryEmpMonth.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                    
                        } 
                    }).map((val, key) => {
                        return(
                            <div className = "displayContainer" style={{width: "100%"}} key = {key}>
                                <div className = "salrow" style={{width: "80%"}}>
                                    {""}
                                    <h5> {val.SalaryEmpId} </h5>
                                <h5> {val.SalaryEmpName} </h5>
                                <h5> {val.SalaryEmpACCno} </h5>
                                <h5> {val.SalaryEmpMonth} </h5>
                                <h5> {val.SalaryBonus} </h5> 
                                <h5> {val.BasicSalary} </h5>
                                <h5> {calcSal(val.BasicSalary,val.SalaryBonus)} </h5>
                                <h5> {calcEpf(val.BasicSalary)} </h5>
                                <h5> {calcEtf(val.BasicSalary)} </h5>
                                <h5> {calcAllow(val.BasicSalary)} </h5>
                

                                </div>
                                    {/* <button onClick = {() =>{
                                            updateSalaries(val._id)
                                        }}> Edit </button>
                                        <button onClick  = {() =>{
                                            ConfirmDelete(val._id)
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