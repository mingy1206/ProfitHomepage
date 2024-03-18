import './App.css';
import Header from './components/header/Header';
import Slide from './pages/main/Main';
import Personal from './pages/personal/Personal';
import Mem1 from './pages/mem1/mem1';
import Mem2 from './pages/mem2/mem2';
import Mem3 from './pages/mem3/mem3';
import Mem4 from './pages/mem4/mem4';
import Mem5 from './pages/mem5/mem5';
import Mem6 from './pages/mem6/mem6';
import Mem7 from './pages/mem7/mem7';

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
          <Route path="mem1" element={<Mem1 />} />
          <Route path="mem2" element={<Mem2 />} />
          <Route path="mem3" element={<Mem3 />} />
          <Route path="mem4" element={<Mem4 />} />
          <Route path="mem5" element={<Mem5 />} />
          <Route path="mem6" element={<Mem6 />} />
          <Route path="mem7" element={<Mem7 />} />
        </Routes>
        <div style={{ marginTop: '100px' }}>
          <Link to="/personal">Personal</Link><br />
          <Link to="/mem1">{name1}</Link>  &nbsp;
          <Link to="/mem2">{name2}</Link>  &nbsp;
          <Link to="/mem3">{name3}</Link>  &nbsp;
          <Link to="/mem4">{name4}</Link>  &nbsp;
          <Link to="/mem5">{name5}</Link>  &nbsp;
          <Link to="/mem6">{name6}</Link>  &nbsp;
          <Link to="/mem7">{name7}</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
