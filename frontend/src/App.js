
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './componets/HomePage';

function App() {
  return (
    <div className='bg-gray-50'>
        <Routes>
              <Route path='/' element={<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;
