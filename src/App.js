import './App.css';
import Intro from './components/Intro';
import Career from './components/Career';
import Project from './components/Project';
import ProjectTeam from './components/ProjectTeam';
import { GoMarkGithub} from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";

function App() {
  return (
    <div className="root" >
      <header className="header" >
        <div className="header_content">
          <FiBookOpen size={"30"}/>
          <div className="header_title"><a href="#intro">김성현의 포트폴리오</a></div>
          <div className="header_nav">
            <div className="header_nav_item"><a href="#profile">소개</a></div>
            <div className="header_nav_item"><a href="#career">수상/경력</a></div>
            <div className="header_nav_item"><a href="#projectTeam">팀 프로젝트</a></div>
            <div className="header_nav_item"><a href="#project">개인 프로젝트</a></div>
          </div>
        </div>
      </header>

      <Intro />


      <article className="intro" id="profile">
        <div className="intro_content">
          <div className="intro_tile_box">
            <div className="intro_title">소개</div>
          </div>
          <div className="intro_item_box">
            <div className="intro_item">
              <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">이름</div>
                  <div className = "item_2">김성현</div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">생년월일</div>
                  <div className = "item_2">97.03.09</div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">주소</div>
                  <div className = "item_2">대구광역시 수성구</div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">연락처</div>
                  <div className = "item_2">010-7487-7027</div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">이메일</div>
                  <div className = "item_2">kim70273@naver.com</div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">학력</div>
                  <div className = "item_2">영남대학교(컴퓨터공학과, 졸업예정)</div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">인스타그램</div>
                  <div className = "item_2"><a href="https://www.instagram.com/kim70273/" target="_blank"><GrInstagram size={"30"} color={"gray"}/></a></div>
                </div>
              </div>
            </div>
            <div className="intro_item">
            <div className="itme_box">
                <div className="about_me">
                  <div className = "item_1">깃허브</div>
                  <div className = "item_2"><a href="https://github.com/kim70273" target="_blank"><GoMarkGithub size={"30"} color={"gray"}/></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Career />
      <ProjectTeam />
      <Project />
    </div>
  );
}

export default App;
