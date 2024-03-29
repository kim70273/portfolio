import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/Career.css';
import career_img_1 from './images/career_1.jpeg';
import career_img_2 from './images/career_2.jpeg';
import styled from "styled-components";

const Career = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <div className="career_content" id="career">
            <div className="career_tile_box">
            <div className="career_title">수상/경력</div>
            </div>

            <div className="career_item_box">
                <div className="career_item_1">
                    <div className="career_item_1_title">오픈소스 SW 경진대회 동상</div>
                    <div className="career_item_1_title_mini">(2020학년도 제 2회, 알고리즘 부문)</div>


                    <Common>
                        
                        <Imgbox>

                            <Slider {...settings}>
                                <div>
                                <img className="career_img" src={career_img_1} />
                                </div>
                                <div>
                                <img className="career_img" src={career_img_2} />
                                </div>
                            </Slider>

            
                        </Imgbox>

                        <Desbox>
                            <div className="career_description">
                            알고리즘 공부를 하면서, 시험장 같은 분위기에서 저의 역량을 평가해보기위해
                            교내에서 <b>오픈소스 SW 경진대회</b>에 참여하였습니다. 항상 더 효율적인 알고리즘이 무엇인지
                            생각해보고 시간 복잡도와 공간 복잡도를 생각 하면서 알고리즘 공부를 꾸준히 하고 있습니다.
                            </div>  
                        </Desbox>

                    </Common>

                    
                </div>
            </div>
        </div>
    )
}

const Common = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    -webkit-box-pack: center;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }`

const Imgbox = styled.div`
  width: 50%;
  margin-right: 0;
  margin-bottom: 1rem;
  text-align: center;
  right: 2rem;
  position: relative;
 @media screen and (max-width: 1000px) {
    width: 100%;
    margin-left:2rem;
    margin-right: 0;
    margin-bottom: 1rem;
    
}`

const Desbox = styled.div`
width: 50%;
@media screen and (max-width: 1000px) {
  width: 100%;
}`

export default Career;