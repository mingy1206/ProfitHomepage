import React from 'react';
import { useState } from 'react';
import "./Main.css";

import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";

const Slide = () => {

  const images = [
    '/image/team_picture.png',
    '/image/aespa1.jpg',
    '/image/aespa2.jpg',
    '/image/aespa3.jpeg',
    '/image/aespa4.jpg'
  ];

  const [curSlide, setCurSlide] = useState(0); // 이미지 슬라이드에서 표출되는 이미지 번호

  const FIRST_SLIDE_INDEX = 0; // 이미지 슬라이드의 시작 번호
  const LAST_SLIDE_INDEX = images.length - 1; // 이미지 슬라이드의 끝 번호
  const MOVE_SLIDE_INDEX = 1; // 이미지 슬라이드 이동 값

  const moveToSlide = (value) => {
    if (value === 'next') {
      // 슬라이드 끝점에 도달했을 때 curSlide의 값을 바꿔 처음으로 돌아가게 한다.
      setCurSlide((prevState) =>
        prevState < LAST_SLIDE_INDEX
          ? prevState + MOVE_SLIDE_INDEX
          : FIRST_SLIDE_INDEX
      );
    }
    if (value === 'prev') {
      // 슬라이드 시작점에 도달했을 때 curSlide의 값을 바꿔 마지막으로 돌아가게 한다.
      setCurSlide((prevState) =>
        prevState > FIRST_SLIDE_INDEX
          ? prevState - MOVE_SLIDE_INDEX
          : LAST_SLIDE_INDEX
      );
    }
  };

  const handlePaginationClick = (index) => {
    setCurSlide(index);
  };

  return (
    <div className='train'>
      <button
        className='arrow-button' 
        onClick={() => moveToSlide('prev')}
      >
        <AiOutlineCaretLeft className="icon" style={{ fontSize: '24px'}}/>
      </button>
      <div className='show'>
        {/* {
          images.map((item, index) => (
          <div
            className='compartment'
            key={index}
            style={{
              transform: `translateX(${-1100 * curSlide}px)`,
              transition: 'all 0.4s ease-in-out',
            }}
          >
            {item}
          </div>
          ))
        } */}
        {
          images.map((item, index) => (
          <div
            className='compartment'
            key={index}
            style={{
              transform: `translateX(${-115 * curSlide}%)`,
              transition: 'all 0.4s ease-in-out',
            }}
          >

            <img key={index} src={item} alt={`Image ${index + 1}`} />
          </div>
          ))
        }
      </div>
      <ol className='slide-index'>
         {
          images.map((_, index) => (
          <li
            key={index}
            className={`index-item ${curSlide === index ? 'active' : ''}`}
            onClick={() => handlePaginationClick(index)}
          >
            {index + 1}
          </li>
          ))
        }
      </ol>
      <button
        className='arrow-button'
        onClick={() => moveToSlide('next')}
      >
        <AiOutlineCaretRight className="icon" style={{ fontSize: '24px'}}/>
      </button>
    </div>
  );
};

export default Slide;