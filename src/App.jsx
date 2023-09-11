import './App.css';

import Navbar from './components/Navbar';
import CarouselPage from './components/CarouselPage';
import RoostCard from './components/RoostCard';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <CarouselPage />
      <RoostCard />
    </div>
  );
}

export default App;
