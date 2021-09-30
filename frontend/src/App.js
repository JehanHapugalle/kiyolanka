import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
import { Supplier, SupplierOne, SupplierTwo, SupplierThree, SupplierFour} from './pages/Supplier';
import React, { useState } from 'react';



function App() {
    
  return (

    
      <Router>
      <Sidebar/>
    

        <switch>

         <Route path='/home' exact component={Home} />
         <Route path='/machine' exact component={Machinery} />
         <Route path='/machine/addmachine' exact component={MachineryOne} />
         <Route path='/machine/viewmachine' exact component={MachineryTwo} />
         <Route path='/machine/expenses' exact component={MachineryThree} />
         <Route path='/machine/analysis1' exact component={MachineryFour} />

         
         <Route path='/home' exact component={Home} />
         <Route path='/supplier' exact component={Supplier} />
         <Route path='/supplier/addsupplier' exact component={SupplierOne} />
         <Route path='/supplier/viewsupplier' exact component={SupplierTwo} />
         <Route path='/supplier/payment' exact component={SupplierThree} />
         <Route path='/supplier/analysis2' exact component={SupplierFour} />
         


        </switch>
      

      </Router>
   
  )
}

export default App;
