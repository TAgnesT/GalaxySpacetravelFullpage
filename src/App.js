import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Training from './pages/Training';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/training' element={<Training />} />
        <Route path='/prices' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
