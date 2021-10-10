import React ,{useState, useEffect, useRef} from "react";
import axios from 'axios';
import './MaterialAnalize.css';
import Logo from './image/logo.jpeg'
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function Usedmaterial(){

    const PDFExportComponent = useRef(null);
    const handledExportWithComponent = (event) => {
        PDFExportComponent.current.save();
    };
    const [Usedmaterial, setusedmaterial] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')



    useEffect(() => {
        function getusedmaterial(){
            axios.get("http://localhost:4000/usedmaterial/").then ((res) => {
                setusedmaterial(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getusedmaterial();
    }, [])
function calnet(x,y){
    return x*y;
}

    return(
       
        <PDFExport ref={PDFExportComponent} >
        
        <div className="Ancontainer">
        <div class="image1">
        <img src={Logo}width="150" alt="logo"/>
        </div>
            <div class="Matemployeelist">
        
                <h1>Material Management</h1>
            </div>
            
            <div class="retrieve">
                <h2>Material Analizer</h2>
            </div>

            <div className="list" style={{width: "45%"}}>
            <div className="matbutton-area">
               
            <Button  primary={true} onClick={handledExportWithComponent}>GENERATE REPORT</Button>
            
            </div>
                <div>
                    <input 
                        usedtype="text"
                        type = "text" 
                        class = "search" 
                        placeholder = "Search" 
                        style={{width: "25%"}} 
                        onChange = {event => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                    <table>

                    <tr className = "UMatrow">
    
                    <th>Amount (kg)</th>
    
                    <th>Type</th>
    
                    <th>Month</th>

                    <th>Unit Price(RS)</th>

                    <th>Net Total</th>
    
    
                    </tr>
    
                    </table>

     <div class="Mator">
                    {Usedmaterial.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.usedamount.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.usedmonth.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        } else if (val.usedtype.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((val, key) => {
                        return(
                            <div className = "displayMContainer" style={{width: "100%"}} key = {key}>
                                <div className = "ANrow" style={{width: "80%"}}>
                                    {""}
                                    <h5> {val.usedamount}</h5>
                                    <h5> {val.usedtype} </h5>
                                    <h5> {val.usedmonth} </h5>
                                    <h5>{val.unit}</h5>
                                    <h5> {calnet(val.usedamount,val.unit)}</h5>
                                    
                                </div>
                            </div>
                        )
                    })}

                    </div>
                </div>

            </div>
           
        </div>
        </PDFExport> 
    );
  }