
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './componets/HomePage';
import Projectdetail from './componets/Projectdetail';

function App() {
  return (
    <div className='bg-gray-50'>
        <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/Bike' element={<Projectdetail/>} />
              <Route path='/Hotel' element={<Projectdetail/>} />
              <Route path='/ecom' element={<Projectdetail/>} />
        </Routes>
    </div>
  );
}

export default App;
