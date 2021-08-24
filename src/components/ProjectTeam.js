import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/ProjectTeam.css';

import zari_1 from './images/ProjectTeam/zari_1.jpeg';
import zari_2 from './images/ProjectTeam/zari_2.jpeg';
import zari_3 from './images/ProjectTeam/zari_3.jpeg';

import react_icon from './images/ProjectTeam/react_icon.png';
import firebase_icon from './images/ProjectTeam/firebase_icon.png';


const ProjectTeam = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="projectTeam_content" id="projectTeam">
            <div className="projectTeam_tile_box">
            <div className="projectTeam_title">팀 프로젝트</div>
            </div>

            <div className="projectTeam_item_box">


                <div className="projectTeam_item_1">
                    <div className="projectTeam_item_1_title">ZARI</div>
                    <div className="projectTeam_item_1_title_mini">(2020.09~2020.12 / 5인 프로젝트)</div>

                    <div className="projectTeam_item_content">
                        <div className="projectTeam_item_content_img_box">

                            <Slider {...settings}>
                                <div>
                                <img className="zari_img"src={zari_1} />
                                </div>
                                <div>
                                <img className="zari_img" src={zari_2} />
                                </div>
                                <div>
                                <img className="zari_img" src={zari_3} />
                                </div>
                            </Slider>
                        </div>

                        <div className="projectTeam_description_box">
                            <div className="projectTeam_description">
                            코로나로 인해서 식당을 가더라도 되도록 사람들이 적은 곳을 가기 위해 
                            가게에 사람들이 얼마나 있는지 대략 적으로 알 수 있게 해주는 웹입니다. 또한 학교 축제 등에서
                            주막을 열게되면 사람이 많아서 빈 자리가 있는 곳을 찾기가 어려운데, 이를 쉽게 알 수 있도록하고
                            가게에 어떤 메뉴가 있는지 쉽게 파악할 수 있게 해줍니다. 동시에 축제 주막에서 일 하는 학생들이
                            웹을 통해서  쉽게 포스기 기능을 사용할 수 있도록 하는 웹입니다.
                            </div>

                            <div className="projectTeam_description-element">
                                <div className="projectTeam_description_label">주요기능</div>
                                <div className="projectTeam_description_content">
                                근처에 있는 가게파악(위치, 메뉴, 손님 수 등), 자신이 직접 현재위치에 가게를 등록할 수 있음, 
                                자신이 등록한 가게 관리기능(포스기, 테이블 개수 추가, 계산, 오늘의 매출액 파악)
                                </div>
                            </div>

                            <div className="projectTeam_description-element">
                                <div className="projectTeam_description_label">Front-end</div>
                                <div className="projectTeam_description_content">
                                <img src={react_icon} style={{width:90, height:40}}/>
                                </div>
                            </div>

                            <div className="projectTeam_description-element">
                                <div className="projectTeam_description_label">Back-end</div>
                                <div className="projectTeam_description_content">
                                <img src={firebase_icon} style={{width:100, height:60}} />
                                </div>
                            </div>

                            <div className="projectTeam_description-element">
                                <div className="projectTeam_description_label">GitHub</div>
                                <div className="projectTeam_description_content">
                                <a href="https://github.com/lookskyblue/zari" target="_blank">https://github.com/lookskyblue/zari</a>
                                </div>
                            </div>

                            <div className="projectTeam_description-element">
                                <div className="projectTeam_description_label">도메인</div>
                                <div className="projectTeam_description_content">
                                <a href="https://zari-b4d28.web.app" target="_blank">https://zari-b4d28.web.app</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>


        </div>
    )
}

export default ProjectTeam;