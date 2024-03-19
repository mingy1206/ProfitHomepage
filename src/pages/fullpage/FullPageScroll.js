import React, { useEffect, useRef } from 'react';
import Header from '../../components/header/Header';
import Slide from '../main/Main';
import './style.css'

import Personal from '../personal/Personal';
import Mem1 from '../mem1/mem1';
import Mem2 from '../mem2/mem2';
import Mem3 from '../mem3/mem3';
import Mem4 from '../mem4/mem4';
import Mem5 from '../mem5/mem5';
import Mem6 from '../mem6/mem6';
import Mem7 from '../mem7/mem7';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function FullPageScroll() {
  const containersRef = useRef([]);
  const containerHeightRef = useRef(0);

  const name1 = "서용준";
  const name2 = "이민기";
  const name3 = "김동관";
  const name4 = "권민우";
  const name5 = "김용우";
  const name6 = "원우형";
  const name7 = "김관일";


  useEffect(() => {
    containersRef.current = document.querySelectorAll('.container');
    containerHeightRef.current = window.innerHeight;
    
    const handleScroll = (e) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      const currentPosition = window.scrollY;
      const normalizedDeltaY = deltaY / Math.abs(deltaY);

      const newPosition = currentPosition + normalizedDeltaY * window.innerHeight; // Adjust the scrolling speed as needed
      console.log(containerHeightRef.current);
      console.log((containerHeightRef.current / 4));
      console.log(newPosition);
      
      window.scrollTo({
        top: newPosition,
        behavior: 'smooth',
      });

      const nearestMultiple = Math.round(newPosition / window.innerHeight) * window.innerHeight;
      if (Math.abs(newPosition - nearestMultiple) > 0) {
        setTimeout(() => {
          window.scrollTo({
            top: nearestMultiple,
            behavior: 'smooth',
          });
        }, 1000); 
      }
    };
  
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="wrap">
      <div className="container" style={{ backgroundColor: 'white' }}>{
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
    }</div>
      <div className="container" style={{ backgroundColor: 'white' }}></div>
      <div className="container" style={{ backgroundColor: 'yellow' }}></div>
      <div className="container" style={{ backgroundColor: 'red' }}></div>
    </div>
  );
}

export default FullPageScroll;
