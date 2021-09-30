import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
import { Salary,SalaryOne,SalaryTwo,SalaryThree} from './pages/SalaryEmployee';


import {Product,ProductOne,ProductTwo,ProductThree} from './pages/Product';

import { Employee, EmployeeOne, EmployeeTwo, EmployeeThree} from './pages/Employee';



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
         <Route path='/salary' exact component={Salary} />
         <Route path='/salary/addemployees' exact component={SalaryOne} />
         <Route path='/salary/salarydetails' exact component={SalaryTwo} />
         <Route path='/salary/analysis' exact component={SalaryThree} />

           
         
         <Route path='/stock' exact component={Product} />
         <Route path='/stock/addstock' exact component={ProductOne} />
         <Route path='/stock/viewstock' exact component={ProductTwo} />
         <Route path='/stock/analysis4' exact component={ProductThree} />




         <Route path='/employee' exact component={Employee} />
         <Route path='/employee/employeelist' exact component={EmployeeOne} />
         <Route path='/employee/addemployee' exact component={EmployeeTwo} />
         <Route path='/employee/attendance' exact component={EmployeeThree} />

        </switch>

      </Router>

  );
}

export default App;
