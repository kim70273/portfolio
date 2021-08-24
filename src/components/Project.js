import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/Project.css';

import youtubeClone_1 from './images/Project/youtubeClone_1.png';
import youtubeClone_2 from './images/Project/youtubeClone_2.png';
import youtubeClone_3 from './images/Project/youtubeClone_3.png';

import react_icon from './images/Project/react_icon.png';
import nodeJs_icon from './images/Project/nodeJs_icon.png';

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="project_content" id="project">
            <div className="project_tile_box">
            <div className="project_title">개인 프로젝트</div>
            </div>

            <div className="project_item_box">


                <div className="project_item_1">
                    <div className="project_item_1_title">YouTube Clone Coding</div>
                    <div className="project_item_1_title_mini">(2021.07~2021.08 / 개인 프로젝트)</div>

                    <div className="project_item_content">
                        <div className="project_item_content_img_box">

                            <Slider {...settings}>
                                <div>
                                <img className="zari_img"src={youtubeClone_1} />
                                </div>
                                <div>
                                <img className="zari_img" src={youtubeClone_2} />
                                </div>
                                <div>
                                <img className="zari_img" src={youtubeClone_3} />
                                </div>
                            </Slider>
                        </div>

                        <div className="project_description_box">
                            <div className="project_description">
                            boilerplate를 이용해서 만든 비디오를 업로드하고 볼 수 있는 웹사이트입니다.
                            front-end의 react와 express 서버가 어떻게 상호작용 하는지 배울 수 있었고,
                            몽고DB를 연결해서 사용해 볼 수 있는 좋은 기회였습니다.
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">주요기능</div>
                                <div className="project_description_content">
                                비디오 업로드, 비디오 시청, 구독, 좋아요, 싫어요, 댓글, 답글
                                </div>
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">Front-end</div>
                                <div className="project_description_content">
                                <img src={react_icon} style={{width:90, height:40}}/>
                                </div>
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">Back-end</div>
                                <div className="project_description_content">
                                <img src={nodeJs_icon} style={{width:90, height:60}} />
                                , Express, MongoDB
                                </div>
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">GitHub</div>
                                <div className="project_description_content">
                                <a href="https://github.com/kim70273/YouTubeClone" target="_blank">https://github.com/kim70273/YouTubeClone</a>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
                

            </div>


{/*
             <div className="project_item_box">


                <div className="project_item_1">
                    <div className="project_item_1_title">To-Do-List</div>
                    <div className="project_item_1_title_mini">(개인 프로젝트)</div>

                    <div className="project_item_content">
                        <div className="project_item_content_img_box">

                            <Slider {...settings}>
                                <div>
                                <img className="zari_img"src={youtubeClone_1} />
                                </div>
                                <div>
                                <img className="zari_img" src={youtubeClone_2} />
                                </div>
                                <div>
                                <img className="zari_img" src={youtubeClone_3} />
                                </div>
                            </Slider>
                        </div>

                        <div className="project_description_box">
                            <div className="project_description">
                            ~~
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">주요기능</div>
                                <div className="project_description_content">
                                ~~
                                </div>
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">Front-end</div>
                                <div className="project_description_content">
                                <img src={react_icon} style={{width:90, height:40}}/>
                                </div>
                            </div>

                            <div className="project_description-element">
                                <div className="project_description_label">GitHub</div>
                                <div className="project_description_content">
                                <a href="https://github.com/kim70273/Momentum" target="_blank">https://github.com/kim70273/Momentum</a>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
                

            </div>
            */}




        </div>
    )
}

export default Project;