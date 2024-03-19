import './App.css';
import Personal from './pages/personal/Personal';
import SYJ from './pages/syj/syj_page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FullpageScroll from './pages/fullpage/FullPageScroll'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullpageScroll />} />
          <Route path="personal" element={<Personal />} />
          <Route path="syj" element={<SYJ />} />
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
