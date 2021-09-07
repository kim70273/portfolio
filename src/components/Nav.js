import React, {useState} from 'react';
import styled from "styled-components";
import { FiBookOpen } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";



const Nav = () => {
    const [menu, setmenu] = useState(false);
    return (
        <NavHead >
        <div className="header_content">
          <FiBookOpen size={"30"}/>
          <div className="header_title"><a href="#intro">김성현의 포트폴리오</a></div>

          <div className="NavItemBox">
            <div className="menuBtn" onClick={() => {setmenu(!menu)}}>
                <IoIosMenu/>
            </div>

            <NavItem menu={menu}>
            <div className="header_nav_item"><a href="#profile">소개</a></div>
            <div className="header_nav_item"><a href="#career">수상/경력</a></div>
            <div className="header_nav_item"><a href="#projectTeam">팀 프로젝트</a></div>
            <div className="header_nav_item"><a href="#project">개인 프로젝트</a></div>
            </NavItem>
          </div>
          
        </div>
        </NavHead>
    )
}

const NavHead = styled.header`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: white;
        opacity:0.8;
        z-index: 10;

        .header_content{
            -webkit-box-sizing: border-box;
            width: 100%;
            max-width: 71.25rem;
            height: 4.5rem;
            padding: 1.25rem 2rem;
            margin: 0 auto;
        }
        
        .header_title{
            margin-left: 1rem;
            display: inline-block;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2rem;
            cursor: pointer;
        }

        .NavItemBox{
            float: right;
            @media screen and (max-width: 1000px) {
                position:abolute;
                display: flex;
                align-items:center;
                flex-direction: column;
                align-items:flex-end;
                margin-right:.5rem;
                background-color: white;
                }
        }

        .menuBtn{
            float: right;
            -webkit-box-sizing: border-box;
            width: 3.5rem;
            height: 3rem;
            padding: .5rem 0;
            margin-top: -.5rem;
            border: 1px solid rgba(0,0,0,.1);
            border-radius: .25rem;
            text-align: center;
            cursor: pointer;
            @media screen and (min-width: 1000px) {
                display: none;    
                }
        }
        `

const NavItem = styled.header`
            float: right;
        
            @media screen and (max-width: 1000px) {
                display: flex;
                align-items:center;
                flex-direction: column;
                align-items:flex-end;
                display: ${({menu}) => {
                    return menu === false ? 'none' : 'flex'
                }};
                }

                .header_nav_item{
                    display: inline-block;
                    padding: 0 1rem;
                    font-weight: 700;
                    font-size: 1rem;
                    line-height: 2rem;
                    cursor: pointer;
                    a:hover {
                        color: #495057;
                    }
                    &.active {
                        font-weight: 600;
                        border-bottom: 2px solid #22b8cf;
                        color: #22b8cf;
                        &:hover {
                            color: #3bc9db;
                        }
                }
            }`;





export default Nav;