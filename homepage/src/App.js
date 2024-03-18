import './App.css';
import Header from './components/header/Header';
import Slide from './pages/main/Main';
import Personal from './pages/personal/Personal';
import mem1 from './pages/mem1/mem1';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './pages/PersonalPages.css'; // CSS 파일을 가져옴

function App() {
  const name1 = "서용준";
  const name2 = "이민기";
  const name3 = "김동관";
  const name4 = "권민우";
  const name5 = "김용우";
  const name6 = "원우형";
  const name7 = "김관일";

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Slide />} />
          <Route path="personal" element={<Personal />} />
          <Route path="mem1" element={<mem1 />} />
          <Route path="mem1" element={<mem2 />} />
          <Route path="mem1" element={<mem3 />} />
          <Route path="mem1" element={<mem4 />} />
          <Route path="mem1" element={<mem5 />} />
          <Route path="mem1" element={<mem6 />} />
          <Route path="mem1" element={<mem7 />} />
        </Routes>
        <div style={{ marginTop: '100px' }}>
          <Link to="/personal">Personal</Link><br />
          <Link to="/mem1">{name1}</Link>
          <Link to="/mem2">{name2}</Link>
          <Link to="/mem3">{name3}</Link>
          <Link to="/mem4">{name4}</Link>
          <Link to="/mem5">{name5}</Link>
          <Link to="/mem6">{name6}</Link>
          <Link to="/mem7">{name7}</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
