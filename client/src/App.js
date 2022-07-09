import './App.css';
import Form from './Form';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';
import ApptDetails from './ApptDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Appointments from './Appointments';
import CreateAppt from './CreateAppts';
import Footer from './Footer'


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />  
      <div className="cont">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/predict" element={<Form/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/create" element={<CreateAppt/>}/>
          <Route path="/appointments/:patient" element={<ApptDetails/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
   </Router>
  );
}

export default App;
