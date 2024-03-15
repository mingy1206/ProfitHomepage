import './App.css';
import Header from './components/header/Header';
import Slide from './pages/main/Main';
import Personal from './pages/personal/Personal';
import SYJ from './pages/syj/syj_page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Slide />} />
          <Route path="personal" element={<Personal />} />
          <Route path="syj" element={<SYJ />} />
        </Routes>
        <div style={{ marginTop: '100px' }}>
          <Link to="/personal">Personal</Link><br />
          <Link to="/syj">syj</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
