import React ,{useState} from "react";
import AddTransport from "./AddTransport";
import Maintenance from "./Maintenance";
import TraAnalysis from "./TraAnalysis"

export const Transport = () =>{
    return(
        <div className="transport">
            <h1></h1>
        </div>
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

