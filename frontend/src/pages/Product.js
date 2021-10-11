import React ,{useState} from "react";
import AddProduct from "./AddProduct.js";
import Viewproduct from "./ViewProduct.js";
import Home from "./Home";
import ProductAnalysis from "./ProductAnalysis.js";

export const Product = () =>{
    return(
        <Home/>
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
        <ProductAnalysis/>
    )
}

