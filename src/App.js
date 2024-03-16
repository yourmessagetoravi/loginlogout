// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';

// import DirectorsPage from './Component/ArrayComponent';
import ToggleButtonComponent from './Component/statecomponent';
//import images from "./images/images.png";
// import DataFetchingComponent from './Component/DataFetchingComponent';
// import CountriesComponent from './Component/DataFetchingComponent';
// import EmpArrayComponent from './Component/ArrayComponent';
// import EmployeeListComponent from './Component/BootstrapCardComponent';
// import StudentDataFetchingComponent from './Component/DataFetchingComponent';
import EmployeeDataFetchingComponent from './Component/Week5';
import EventHandlingComponent from './Component/EventHandling';
import MyPropsComponent from './Component/W3_PropsComponent';
import StudentUseEffectComponent from './Component/Week4';
import TernaryOperatorComponent from './Component/Week6';
import EmployeeBootstrapDataFetchingComponent from './Component/Week7';
import FormsComponent from './Component/Forms';
//import RegistrationPage from './Component/RegistrationPage';
import RegistrationComponent from './Component/RegistrationPage';
import Login from './Component/Login';
import HomePage from './Component/HomePage';

function App() {



  return (
    <div className="App">
      
      <h1 className="text-secondary" style={{textAlign: 'center'}}>Welcome to My React Application</h1>

      <div className='container mt-3'>
         
          
          <div className='container'>
            
          <Router>
            
              <Routes>
                  <Route path="/W3_PropsComponent" element={<MyPropsComponent/>}/>
                  <Route path='/statecomponent' element={<ToggleButtonComponent/>}/>
                  <Route path='/Week4' element={<StudentUseEffectComponent/>}/>
                  <Route path='/Week5' element={<EmployeeDataFetchingComponent/>} />
                  <Route path='/Week6' element={<TernaryOperatorComponent/>} />
                  <Route path='/Week7' element={<EmployeeBootstrapDataFetchingComponent/>} />
                  <Route path='/EventHandling' element={<EventHandlingComponent/>} />
                  <Route path='/Forms' element={<FormsComponent/>} />
                  <Route path='/RegistrationPage' element={<RegistrationComponent/>} />
                  <Route exact path='/' element={<Login/>}/>
                  <Route exact path='/Login' element={<Login/>}/>

                  <Route path='/HomePage' element={<HomePage/>}/>

              </Routes>
              </Router>
          </div>
      </div>
      
    </div>
  );
}

export default App;
