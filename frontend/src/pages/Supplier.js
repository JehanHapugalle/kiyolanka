import React ,{useState} from "react";
import AddSupplier from "./AddSupplier";
import ViewSupplier from "./ViewSupplier";
import Home from "./Home";
import SupAnalysis from "./SupAnalysis"



export const Supplier = () =>{
    return(
        <Home/>
    )
}

export const  SupplierOne= () =>{
    return(
       <AddSupplier/>
    )
}

export const SupplierTwo = () =>{
    return(
        <ViewSupplier/>
    )
}


export const SupplierThree = () =>{
    return(
       <SupAnalysis/>
    )
}





