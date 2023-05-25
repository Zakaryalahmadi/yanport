import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Game from './components/Game/game';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
