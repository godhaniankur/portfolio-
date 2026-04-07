import './App.css';
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
import FakeDataGen from './page/Fakedatagen';
import TermsAndConditions from './page/Termsandconditions';
import PostDoc from './componets/PostDoc';
import PutDoc from './componets/PutDoc';
import DeleteDoc from './componets/DeleteDoc';
import NumberValidationdoc from './componets/Validation/NumberValidationdoc';



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
          <Route path="/user-identity" element={<FakeDataGen />} />
          <Route path='/termsandcondition' element={<TermsAndConditions />} />
          {/* <Route path='/validation' element={<ValidationTest/>} /> */}
          <Route path='/GST-Information' element={<GST />} />
          <Route path='/About' element={<About />} />
          <Route path='/contact' element={<DeveloperContact />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/documentation" element={<Documentation />}>

            <Route path='home' element={<Home />} />
            <Route path="GET-Method" element={<GET />} />
            <Route path='POST-Method' element={<PostDoc/>} />
            <Route path='PUT-Method' element={<PutDoc/>} />
            <Route path='DELETE-Method' element={<DeleteDoc/>} />
            <Route path='useContext-hook' element={<NumberValidationdoc/>} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
