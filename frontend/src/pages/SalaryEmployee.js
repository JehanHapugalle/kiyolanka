import React ,{useState} from "react";
import AddSalaryEmployee from "./AddSalaryEmployee";
import SalaryDetails from "./SalaryDetails";

export const Salary = () =>{
    return(
        <div className="salaryEmployee">
            <h1></h1>
        </div>
    )
}

export const  SalaryOne= () =>{
    return(
       <AddSalaryEmployee/>
    )
}
export const SalaryTwo = () =>{
    return(
        
        <SalaryDetails/>
    )
}
export const SalaryThree = () =>{
    return(
        <div className="salary">
            <h1>Analysis</h1>
        </div>
    )
}
