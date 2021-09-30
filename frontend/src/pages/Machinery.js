import React ,{useState} from "react";
import AddMachine from "./AddMachine";
import ViewMachine from "./ViewMachine";
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
        <div className="machinery">
            <h1>expenses</h1>
        </div>
    )
}
export const MachineryFour = () =>{
    return(
        <div className="machinery">
            <h1>analysis</h1>
        </div>
    )
}
