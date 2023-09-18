import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
