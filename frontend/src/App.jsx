
import './App.css';
import Projectdetail from './componets/Projectdetail';

import NotFound from './samepage/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Privacy } from './page/Privacy';
import About from './page/About';
import DeveloperContact from './page/Contact';
import Home from './componets/HomePage';
import Footer from './componets/Footer';
import Header from './componets/Navbar';


function App() {
  
  return (
    <>
      <div className='bg-gray-50'>
        <Header />
        <Routes>
              {/* <Route path='/' element={<HomePage/>} /> */}
              <Route path="/" element={<Home/>} />
              <Route path='/Bike' element={<Projectdetail/>} />
              <Route path='/Hotel' element={<Projectdetail/>} />
              <Route path='/ecom' element={<Projectdetail/>} />
              <Route path='/privacy' element={<Privacy/>} />
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
