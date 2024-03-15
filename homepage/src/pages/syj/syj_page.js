import React, { useState, useEffect } from 'react';
import './Style.css'; // CSS 파일을 가져옴
import my_img from './img/my_img.png'
import icon1 from './img/icon/icon1.png'
import icon2 from './img/icon/icon2.png'
import icon3 from './img/icon/icon3.png'
import icon4 from './img/icon/icon4.png'
import icon5 from './img/icon/icon5.png'
import icon6 from './img/icon/icon6.png'
import icon7 from './img/icon/icon7.png'
import icon8 from './img/icon/icon8.png'
import icon9 from './img/icon/icon9.png'

const MyPage = () => {
    return (
        <div class="home-image">
            <div class="main-cover" />
            <article class="main-text">
                <div class="info-container">

                </div>
                <div id="content">
                    <div class="left-content1">
                        <img class="img1" src={my_img} style={{ maxWidth: "50%" }} />
                    </div>
                    <div class="right-content1">
                        <h2>서용준</h2>
                        <p>1999년 4월 22일 서울 출생</p>
                        <p>+82 10-9690-0159</p>
                        <p>tom990422@gmail.com</p>
                        <p><a style={{ color: "white" }} href="https://mango0422.github.io/">https://mango0422.github.io/</a></p>
                    </div>
                </div>
                <div id="content">
                    <div class="left-content2">
                        <h2>경력</h2>
                        <ul>
                            <li>2018.02 상계고등학교 졸업</li>
                            <li>2019.03 가천대학교 입학 (소프트웨어 전공)</li>
                            <li>2024.03 KE SW 아카데미 4기</li>
                        </ul>
                        <h2>수상 이력</h2>
                    </div>
                    <div class="right-content2">
                        <h2>Skills</h2>
                        <div class="flex-container">
                            <img class="icon" src={icon1} alt="" />
                            <img class="icon" src={icon2} alt="" />
                            <img class="icon" src={icon3} alt="" />
                            <img class="icon" src={icon4} alt="" />
                            <img class="icon" src={icon5} alt="" />
                            <img class="icon" src={icon6} alt="" />
                            <img class="icon" src={icon7} alt="" />
                            <img class="icon" src={icon8} alt="" />
                            <img class="icon" src={icon9} alt="" />
                        </div>
                    </div>
                </div>

            </article>
        </div>
    );
}

export default MyPage;