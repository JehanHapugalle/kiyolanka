import React from 'react';

import Logo from './image/logo.jpeg'

import BannerImage from './image/greenCoCo.jpg'

import './Home.css'

import { Redirect } from "react-router-dom";




function Home () {



      

  return (



   <div className="Home">



     <div className ="Hlogo" style={{backgroundImage:`url(${BannerImage})`}}>



         <img src={Logo} width = "200"/>



         <h1 className="topic" 



         >Kiyo Lanka CoCo Products PVT LTD </h1>



         <h2 className="topic2">"We are a proudly family operated and owned business"</h2>



         <h2 className="topic2">with more than 30 years of experience</h2>



         <h2 className="topic2"> in the coco peat industry"</h2>



       </div>



       



      





   </div>



  )



}

export default Home;