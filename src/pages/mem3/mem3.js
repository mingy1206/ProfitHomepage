import my_img from './my_img.png'
import icon1 from '../img/icon/clang.png'
import icon2 from '../img/icon/java.png'
import icon3 from '../img/icon/python.png'
import icon4 from '../img/icon/react.png'
import icon5 from '../img/icon/django.png'
import icon6 from '../img/icon/fastapi.png'
import icon7 from '../img/icon/mysql.png'
import icon8 from '../img/icon/git.png'
// import icon9 from '../img/icon/aws.png'
// import icon10 from '../img/icon/fastapi.png'
// import icon11 from '../img/icon/fastapi.png'
// import icon12 from '../img/icon/fastapi.png'

const Mem3 = () => {
    const name = "김동관";
    const email = "enuyasa01@gachon.ac.kr";
    const website = "https://song-programming.tistory.com/";
    const li1_1 = "2024.03 KE SW 아카데미 4기";
    const li1_2 = "2023.07~2023.08 여름방학 단기 인턴";
    const li2_1 = "2024.01. 2023 가천 P-실무프로젝트 영상 공모전 대상";

    return (
        <main class="home-image">
            <div class="main-cover" />
            <article class="main-text">
                <div class="info-container">

                </div>
                <div id="content">
                    <div class="left-content1">
                        <img class="img1" src={my_img} style={{ maxHeight: "200px" }} alt='201935015 김동관' />
                    </div>
                    <div class="right-content1">
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p><a href={website}>{website}</a></p>
                    </div>
                </div>
                <div id="content">
                    <div class="left-content2">
                        <h2>경력</h2>
                        <ul>
                            <li>{li1_1}</li>
                        </ul>
                        <ul>
                            <li>{li1_2}</li>
                        </ul>
                        <h2>수상 이력</h2>
                        <ul>
                            <li>{li2_1}</li>
                        </ul>
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
                            {/* <img class="icon" src={icon9} alt="" />
                            <img class="icon" src={icon10} alt="" />
                            <img class="icon" src={icon11} alt="" />
                            <img class="icon" src={icon12} alt="" /> */}
                        </div>
                    </div>
                </div>

            </article>
        </main>
    );
}

export default Mem3;