import React from 'react';
import './css/Intro.css';
import idPicture from './images/Intro/idPicture.jpeg'
import { GoMarkGithub} from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";

const Intro = () => {
    return (
        <Common id="intro">
            <Imgbox>
            
                <img className="idPicture" src={idPicture} />
                <h1>Sung Hyeon Kim</h1>
            </Imgbox>


            <Desbox>
                <div className="Intro_description_1">안녕하세요! 웹 개발자를 꿈 꾸고 있는 김성현입니다!</div>
                <div className="Intro_description_2">Front-end, Back-end에 모두 관심이 있으며,<br/>
                    현재에는 Front-end에 더 중점적으로 공부하고 있습니다.</div>
                <div className="Intro_description_3">항상 포기하지않고 끊임없이 해결방법을 생각해겠습니다!</div>
                <div className="Intro_description_item_box">
                    <div className="Intro_description_item">
                        <a href="https://github.com/kim70273" target="_blank"><GoMarkGithub size={"50"}/></a>
                        <div>GitHub</div>
                    </div>
                    <div className="Intro_description_item">
                    <a href="https://www.instagram.com/kim70273/" target="_blank"><GrInstagram size={"50"}/></a>
                    <div>Instagram</div>
                    </div>
                </div>
            </Desbox>
        </Common>
    );
}

const Common = styled.div`
margin-top: 10rem;
display: flex;
flex-flow: row nowrap;
margin-bottom: 2rem;
margin-right: 4rem;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }`

const Imgbox = styled.div`
width: 50%;
text-align: center;
 @media screen and (max-width: 900px) {
    width: 100%;
    margin-left:2rem;
    
}`

const Desbox = styled.div`
width: 50%;
  justify-content: center;
@media screen and (max-width: 900px) {
  width: 100%;
  margin-left:2rem;
}`

export default Intro;