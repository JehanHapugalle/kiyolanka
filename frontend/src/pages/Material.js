import React ,{useState} from "react";
import AddMaterials from "./AddMaterials";
import Materialstock from "./Materialstock";

export const Materials = () =>{
    return(
        <div className="machinery">
            <h1></h1>
        </div>
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
        <div className="machinery">
            <h1>MaterialStock</h1>
        </div>
    )
}
export const MaterialFour = () =>{
    return(
        <div className="machinery">
            <h1>Usedmaterial</h1>
        </div>
    )
}
