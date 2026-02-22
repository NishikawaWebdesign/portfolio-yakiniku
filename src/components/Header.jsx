import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import ScrollBar from '../assets/scrollbar.png'
import HeaderVideo from '../assets/header-video.mp4'

const Set = styled.div`
    position:relative;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction:column;
    z-index:1;

    @keyframes upDown {
    0% { transform: translateY(0); }
    50% { transform: translateY(15px); }  
    100% { transform: translateY(0); }
    }

    .hero img {
    position:relative;
    margin:auto;
    width:68vw;
    margin-top:3.7vw;
    object-fit: cover;
    z-index:1;

    @media (max-width:1200px) {
        margin-top:9vw;
    }
    @media (max-width:600px) {
        margin-top:10vw;
        width:100vw;
    }
    }
    .video{
        video{
        position:relative;
        margin:-34% 3% 0 3%;
        width: 94%;
        height: auto;   /* 必須：動画が見えるように */
        object-fit: cover;
        border-radius: 130px; /* お好み */
        z-index:0;
        @media (max-width: 600px) {
            width:100%;
            border-radius:10px;
            margin:0;
            margin-top:-40%
        }
        }
    }
    .scrollbar{
        position:absolute;
        left:50%;
        top:42.5vw;
        z-index:1;
        animation: upDown 2.4s ease-in-out infinite;
        img{
            transform: translateX(-50%);
            @media (max-width:800px) {
                width:10vw;
            }
        }
        @media (max-width:600px) {
            top:60vw;
        }
    }
`;

const Header = () => {
  return (
    <Set>
        <div className="hero">
            <img src={logo} alt="" />
        </div>
        <div className="video">
            <video src={HeaderVideo}
            autoPlay
            muted
            loop
            ></video>
        </div>
        <div className="scrollbar">
            <img src={ScrollBar} alt="" />
        </div>
    </Set>
  )
}

export default Header