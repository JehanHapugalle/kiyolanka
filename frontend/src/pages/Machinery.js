import React ,{useState} from "react";
import AddMachine from "./AddMachine";
import ViewMachine from "./ViewMachine";
import ExpenseForm from "./ExpenseForm";
import Home from "./Home";



export const Machinery = () =>{
    return(
       <Home/>
    )
}

export const  MachineryOne= () =>{
    return(
       <AddMachine/>
    )
}
export const MachineryTwo = () =>{
    return(
        <ViewMachine/>
    )
}
export const MachineryThree = () =>{
    return(
        <ExpenseForm/>
    )    
}

