import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
import { Materials,MaterialOne,MaterialTwo,MaterialThree,MaterialFour} from './pages/Material';

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

         <Route path='/materials' exact component={Materials} />
         <Route path='/materials/addmaterials' exact component={MaterialOne} />
         <Route path='/materials/materialstock' exact component={MaterialTwo} />
         <Route path='/materials/usedmaterials' exact component={MaterialThree} />
         <Route path='/materials/analaysis3' exact component={MaterialFour} />


        </switch>

      </Router>

      

   


  );
}

export default App;
