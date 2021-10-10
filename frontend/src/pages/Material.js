import React ,{useState} from "react";
import AddMaterials from "./AddMaterials";
import Home from "./Home";
import Materialstock from "./Materialstock";
import Materialsused from "./Materialused";
import MaterialAnalize from "./MaterialAnalize";

export const Materials = () =>{
    return(
        <Home/>
    )
}

export const  MaterialOne= () =>{
    return(
       <AddMaterials/>
    )
}
export const MaterialTwo = () =>{
    return(
        
      <Materialstock/>
        
    )
}
export const MaterialThree = () =>{
    return(
        
        <Materialsused/>
    )
}
export const MaterialFour = () =>{
    return(
       <MaterialAnalize/>
    )
}
