import React ,{useState} from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

export const Employee = () =>{
    return(
        <div className="employee">
            <h1></h1>
        </div>
    )
}

export const EmployeeOne = () =>{
    return(
        <EmployeeList/>
    )
}

export const  EmployeeTwo = () =>{
    return(
       <AddEmployee/>
    )
}

export const EmployeeThree = () =>{
    return(
        <div className="employee">
            <h1>Attendance</h1>
        </div>
    )
}

