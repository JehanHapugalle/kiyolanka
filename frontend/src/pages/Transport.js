import React ,{useState} from "react";
import AddTransport from "./AddTransport";
import Home from "./Home";
import Maintenance from "./Maintenance";
import TraAnalysis from "./TraAnalysis"

export const Transport = () =>{
    return(
        <Home/>
    )
}

export const  TransportOne= () =>{
    return(
       <AddTransport/>
    )
}
export const TransportTwo = () =>{
    return(
       
        <Maintenance/>     
    )
}
export const TransportThree = () =>{
    return(
        <TraAnalysis/>

       
    )
}

