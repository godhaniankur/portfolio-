
import './App.css';
import Projectdetail from './componets/Projectdetail';

import NotFound from './samepage/NotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Privacy } from './page/Privacy';
import About from './page/About';
import DeveloperContact from './page/Contact';
import Home from './componets/HomePage';
import Footer from './componets/Footer';
import Header from './componets/Navbar';
import DeveloperTestData from './page/DeveloperTestData';
import ValidationTest from './page/ValidationTest';
import GST from './page/GST';



function App() {
  
  return (
    <>
      <div className='bg-gray-50'>
        <Header />
        <Routes>
              {/* <Route path='/' element={<HomePage/>} /> */}
              <Route path="/home" element={<Home/>} />
              <Route path='/' element={<DeveloperTestData/>} />
              <Route path='/privacy' element={<Privacy/>} />
              {/* <Route path='/validation' element={<ValidationTest/>} /> */}
              <Route path='/GST-Information' element={<GST/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/contact' element={<DeveloperContact />} />
              <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />
    </div>
    </>
  )
}

export default App
