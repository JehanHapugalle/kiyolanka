import React ,{useState} from "react";
import AddSale from "./AddSale.js";
import SalesHistory from "./SalesHistory.js";
import Home from "./Home.js";
import AddCal from "./AddCalSale.js";

export const Sale = () =>{
    return(
        <Home/>
    )
}
export const SaleOne = () =>{
    return(
        <AddCal/>
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
// export const SaleFour = () =>{
//     return(
//         <div className="sale">
//             <h1>analysis</h1>
//         </div>
//     )
// }


