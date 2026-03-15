
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './componets/HomePage';
import Projectdetail from './componets/Projectdetail';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import NotFound from './samepage/NotFound';
import Backdrop from './Backdrop';

function App() {
  return (
    <div className='bg-gray-50'>
      <Navbar/>
        <Routes>
              {/* <Route path='/' element={<HomePage/>} /> */}
              <Route path="/" element={<Backdrop/>} />
              <Route path='/Bike' element={<Projectdetail/>} />
              <Route path='/Hotel' element={<Projectdetail/>} />
              <Route path='/ecom' element={<Projectdetail/>} />
              <Route path='*' element={<NotFound/>} />
        </Routes>
     
    </div>
  );
}

export default App;
