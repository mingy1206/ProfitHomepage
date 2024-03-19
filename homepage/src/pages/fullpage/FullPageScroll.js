import React, { useEffect, useRef } from 'react';
import Header from '../../components/header/Header';
import Slide from '../main/Main';
function FullPageScroll() {
  const containersRef = useRef([]);
  const containerHeightRef = useRef(0);

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
      <div className="container" style={{ backgroundColor: 'white' }}>{<div><Header/><Slide/></div>}</div>
      <div className="container" style={{ backgroundColor: 'orange' }}></div>
      <div className="container" style={{ backgroundColor: 'yellow' }}></div>
      <div className="container" style={{ backgroundColor: 'red' }}></div>
    </div>
  );
}

export default FullPageScroll;
