import React ,{useState} from "react";
import AddProduct from "./AddProduct.js";
import Viewproduct from "./ViewProduct.js";

export const Product = () =>{
    return(
        <div className="product">
            <h1></h1>
        </div>
    )
}

export const  ProductOne= () =>{
    return(
       <AddProduct/>
    )
}
export const ProductTwo = () =>{
    return(
        <Viewproduct/>
    )
}
export const ProductThree = () =>{
    return(
        <div className="product">
            <h1>analysis</h1>
        </div>
    )
}

