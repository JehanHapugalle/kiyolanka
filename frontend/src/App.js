import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
import { Salary,SalaryOne,SalaryTwo,SalaryThree} from './pages/SalaryEmployee';


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

        </switch>

      </Router>

      

   


  );
}

export default App;
