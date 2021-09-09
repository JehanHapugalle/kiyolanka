import React ,{useState} from "react";
import employeeList from "./employeeList";
import AddEmployee from "./addEmployee";

export const Employee = () =>{
    return(
        <div className="employee">
            <h1></h1>
        </div>
    )
}

export const EmployeeOne = () =>{
    return(
        <employeeList/>
    )
}

export const  EmployeeTwo= () =>{
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

