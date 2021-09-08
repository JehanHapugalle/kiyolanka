import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
import {Product,ProductOne,ProductTwo,ProductThree} from './pages/Product';

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
         
         <Route path='/stock' exact component={Product} />
         <Route path='/stock/addstock' exact component={ProductOne} />
         <Route path='/stock/viewstock' exact component={ProductTwo} />
         <Route path='/stock/analysis' exact component={ProductThree} />


        </switch>

      </Router>

      

   


  );
}

export default App;
