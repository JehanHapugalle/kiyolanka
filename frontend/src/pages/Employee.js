import React ,{useState} from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import Home from "./Home";
import Attendance from "./Attendance";

export const Employee = () =>{
    return(
        <Home/>
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
        <Attendance/>
    )
}

