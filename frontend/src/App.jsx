
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
import GST from './page/GST';
import Documentation from './page/Documentation';
import GET from './componets/GET';



function App() {

  return (
    <>
      <div className='bg-gray-50'>
        <div className='h-[60px]'>
          <Header />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/' element={<DeveloperTestData />} />
          <Route path='/privacy' element={<Privacy />} />
          {/* <Route path='/validation' element={<ValidationTest/>} /> */}
          <Route path='/GST-Information' element={<GST />} />
          <Route path='/About' element={<About />} />
          <Route path='/contact' element={<DeveloperContact />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/documentation" element={<Documentation />}>

            <Route path='home' element={<Home />} />
            <Route path="GET-Method" element={<GET />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
