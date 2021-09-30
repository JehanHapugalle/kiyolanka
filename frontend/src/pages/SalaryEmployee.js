import React ,{useState} from "react";
import AddSalaryEmployee from "./AddSalaryEmployee";
import SalaryDetails from "./SalaryDetails";
import Home from "./Home";

export const Salary = () =>{
    return(
       <Home/>
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
