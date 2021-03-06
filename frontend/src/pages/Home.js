import React from 'react';
import Logo from './image/logo.jpeg'
import BannerImage from './image/homebg.jpg'
import { useHistory } from "react-router-dom";
import './Home.css'
function Home (){
  
  const history = useHistory();
  const logout = () => {
      sessionStorage.removeItem('auth-token');
      history.push("/");
      window.location.reload();
  }

  return (
    <>

      <div className="Home">

        <div className ="Hlogos" style={{backgroundImage:`url(${BannerImage})`}}>
        
          <div>
            <img src={Logo} width = "200" className="himage"/>
            <h1 className="topic" > Kiyo Lanka CoCo Products PVT LTD </h1>
            <h2 className="topic2">"We are a proudly family operated and owned business</h2>
            <h2 className="topic3">with more than 30 years of experience</h2>
            <h2 className="topic4"> in the coco peat industry"</h2>
          </div>
          <div>
            <button onClick={logout} class = "logout"> Logout</button>
          </div>
        </div>

      </div>
    </>
  )
  }
  export default Home;