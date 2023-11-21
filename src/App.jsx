import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lodges from './pages/Lodges';
import Contact from './pages/Contact';
import Rates from './pages/Rates';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/lodges'} element={<Lodges />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/rates'} element={<Rates />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
