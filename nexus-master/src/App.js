import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home2 from './Components/home2';
import AboutUs from './Components/aboutUs';
import ContactScreen from './Components/contactus';
import PhotoScreen1 from './Components/photoscreen1';
import PhotoScreen2 from './Components/photoscreen2';

function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="/home" element={<Home2 />}></Route>
          <Route path="/about" element={<AboutUs />}> </Route>
          <Route path="/contact" element={<ContactScreen />}> </Route>
          <Route path="/photoscreen1" element={<PhotoScreen1 />}> </Route>
          <Route path="/photoscreen2" element={<PhotoScreen2 />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;

