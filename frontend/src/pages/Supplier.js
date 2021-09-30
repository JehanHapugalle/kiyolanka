import React ,{useState} from "react";
import AddSupplier from "./AddSupplier";
import ViewSupplier from "./ViewSupplier";
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

export const SupplierThree = () =>{
    return(
        <div className="supplier">
            <h1>payment</h1>
        </div>
    )
}

export const SupplierFour = () =>{
    return(
        <div className="supplier">
            <h1>analysis</h1>
        </div>
    )
}
