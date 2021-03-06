import {Product,ProductOne,ProductTwo,ProductThree} from './pages/Product';
import { Employee, EmployeeOne, EmployeeTwo, EmployeeThree} from './pages/Employee';
import { Sale, SaleOne, SaleTwo, SaleThree} from './pages/Sale';
import Login from './pages/Login';

function App() {
    
    return (
      <>
      <Router>      

      <Header/>
     
        <switch>

         <Route path='/' exact component={Login} /> 
         <Route path='/home' exact component={Home} />

         <Route path='/machine' exact component={Machinery} />
         <Route path='/machine/addmachine' exact component={MachineryOne} />
         <Route path='/machine/viewmachine' exact component={MachineryTwo} />
         <Route path='/machine/expenses' exact component={MachineryThree} />
        
         <Route path='/transport' exact component={Transport} />
         <Route path='/transport/addtransport' exact component={TransportOne} />
         <Route path='/transport/maintenance' exact component={TransportTwo} />
         <Route path='/transport/analysis6' exact component={TransportThree} />
        
         <Route path='/materials' exact component={Materials} />
         <Route path='/materials/addmaterials' exact component={MaterialOne} />
         <Route path='/materials/materialstock' exact component={MaterialTwo} />
         <Route path='/materials/usedmaterials' exact component={MaterialThree} />
         <Route path='/materials/analaysis3' exact component={MaterialFour} />
         
         <Route path='/supplier' exact component={Supplier} />
         <Route path='/supplier/addsupplier' exact component={SupplierOne} />
         <Route path='/supplier/viewsupplier' exact component={SupplierTwo} />
         <Route path='/supplier/analysis2' exact component={SupplierThree} />

         <Route path='/salary' exact component={Salary} />
         <Route path='/salary/addemployees' exact component={SalaryOne} />
         <Route path='/salary/salarydetails' exact component={SalaryTwo} />
         <Route path='/salary/analysis' exact component={SalaryThree} />
         
         <Route path='/stock' exact component={Product} />
         <Route path='/stock/addstock' exact component={ProductOne} />
         <Route path='/stock/viewstock' exact component={ProductTwo} />
         <Route path='/stock/analaysis4' exact component={ProductThree} />

         <Route path='/employee' exact component={Employee} />
         <Route path='/employee/employeelist' exact component={EmployeeOne} />
         <Route path='/employee/addemployee' exact component={EmployeeTwo} />
         <Route path='/employee/attendance' exact component={EmployeeThree} />

         <Route path='/sales' exact component={Sale} />
         <Route path='/sales/calbill' exact component={SaleOne} />
         <Route path='/sales/addsales' exact component={SaleTwo} />
         <Route path='/sales/saleshistory' exact component={SaleThree} />
         

        </switch>
        
      </Router>
      </>
    );
}
export default App;