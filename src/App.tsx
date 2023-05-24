import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/playground" element={<Playground />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
