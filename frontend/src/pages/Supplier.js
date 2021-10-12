import React ,{useState} from "react";
import AddSupplier from "./AddSupplier";
import ViewSupplier from "./ViewSupplier";
import SupAnalysis from "./SupAnalysis";
import Home from "./Home";


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

export const SupplierFour = () =>{
    return(
       <SupAnalysis/>
    )
}


