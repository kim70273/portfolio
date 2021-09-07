import './App.css';
import React from 'react';
import Intro from './components/Intro';
import Career from './components/Career';
import Project from './components/Project';
import ProjectTeam from './components/ProjectTeam';
import { GoMarkGithub} from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";
import Nav from './components/Nav';

function App() {
  
  return (
    <div className="root" >
      <Nav />

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
