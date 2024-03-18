import my_img from './my_img.png'
import icon1 from '../img/icon/spring.png'
import icon2 from '../img/icon/react.png'
import icon3 from '../img/icon/python.png'
import icon4 from '../img/icon/node.png'
import icon5 from '../img/icon/mysql.png'
import icon6 from '../img/icon/linux.png'
import icon7 from '../img/icon/java.png'
import icon8 from '../img/icon/git.png'
import icon9 from '../img/icon/aws.png'
import icon10 from '../img/icon/docker.png'
import icon11 from '../img/icon/jenkins.png'
import icon12 from '../img/icon/fastapi.png'

const Mem1 = () => {
    const name = "서용준";
    const email = "syj0422@gachon.ac.kr";
    const website = "https://mango0422.github.io/";
    const li1_1 = "2024.03 KE SW 아카데미 4기";
    const li2_1 = "2024.01. 2023 가천 P-실무프로젝트 영상 공모전 대상";

    return (
        <main class="home-image">
            <div class="main-cover" />
            <article class="main-text">
                <div class="info-container">

                </div>
                <div id="content">
                    <div class="left-content1">
                        <img class="img1" src={my_img} style={{ maxHeight: "200px" }} alt='201935062 서용준' />
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
                            <img class="icon" src={icon9} alt="" />
                            <img class="icon" src={icon10} alt="" />
                            <img class="icon" src={icon11} alt="" />
                            <img class="icon" src={icon12} alt="" />
                        </div>
                    </div>
                </div>

            </article>
        </main>
    );
}

export default Mem1;