import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
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

         <Route path='/employee' exact component={Employee} />
         <Route path='/employee/employeelist' exact component={EmployeeOne} />
         <Route path='/employee/addemployee' exact component={EmployeeTwo} />
         <Route path='/employee/attendance' exact component={EmployeeThree} />

        </switch>

      </Router>

  );
}

export default App;
