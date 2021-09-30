import React ,{useState} from "react";
import AddSale from "./AddSale.js";
import SalesHistory from "./SalesHistory.js";
import Home from "./Home.js";

export const Sale = () =>{
    return(
        <Home/>
    )
}
export const SaleOne = () =>{
    return(
        <div className="sale">
            <h1>CalculateBill</h1>
        </div>
    )
}
export const  SaleTwo= () =>{
    return(
       <AddSale/>
    )
}
export const SaleThree = () =>{
    return(
        <SalesHistory/>
    )
}
export const SaleFour = () =>{
    return(
        <div className="sale">
            <h1>analysis</h1>
        </div>
    )
}


