import my_img from './my_img.png'
import icon1 from '../img/icon/clang.png'
import icon2 from '../img/icon/java.png'
import icon3 from '../img/icon/python.png'
import icon4 from '../img/icon/react.png'
import icon5 from '../img/icon/flask.png'
import icon6 from '../img/icon/fastapi.png'
import icon7 from '../img/icon/aws.png'
import icon8 from '../img/icon/git.png'
// import icon9 from '../img/icon/aws.png'
// import icon10 from '../img/icon/fastapi.png'
// import icon11 from '../img/icon/fastapi.png'
// import icon12 from '../img/icon/fastapi.png'

const Mem4 = () => {
    const name = "권민우";
    const email = "422mukgui@gachon.ac.kr";
    const website1 = "https://github.com/MINUUUUUUUUUUUU";
    const website2 = "https://miniminichipchip.tistory.com/";
    const li1_1 = "2024.03 KE SW 아카데미 4기";
    const li2_1 = "-";

    return (
        <main class="home-image">
            <div class="main-cover" />
            <article class="main-text">
                <div class="info-container">

                </div>
                <div id="content">
                    <div class="left-content1">
                        <img class="img1" src={my_img} style={{ maxHeight: "200px" }} alt='201935008 권민우' />
                    </div>
                    <div class="right-content1">
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p><a href={website1}>{website1}</a></p>
                        <p><a href={website2}>{website2}</a></p>
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

export default Mem4;