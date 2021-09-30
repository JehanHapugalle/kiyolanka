import './App.css';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Machinery,MachineryOne,MachineryTwo,MachineryThree,MachineryFour} from './pages/Machinery';
import { Transport,TransportOne,TransportTwo,TransportThree,} from './pages/Transport';

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

         

         
         <Route path='/transport' exact component={Transport} />
         <Route path='/transport/addtransport' exact component={TransportOne} />
         <Route path='/transport/maintenance' exact component={TransportTwo} />
         <Route path='/transport/analysis6' exact component={TransportThree} />
        


        </switch>

      </Router>

      

   


  );
}

export default App;
