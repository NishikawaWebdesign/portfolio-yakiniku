import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'

import '@splidejs/react-splide/css'; // Splideの基本CSSを読み込む

import Slide1 from '../assets/banner.png';
import Slide2 from '../assets/banner.png';
import Slide3 from '../assets/banner.png';
import Slide4 from '../assets/banner.png';
import Slide5 from '../assets/banner.png';
import Slide6 from '../assets/banner.png';
import Slide7 from '../assets/banner.png';
import Slide8 from '../assets/banner.png';

import BannerTag from '../assets/banner-tag.png'

const Set = styled.div`
    background:radial-gradient(
      circle at center,
      #323232 0%,
      #1F1F1F 100%
    );
    width: 100%;
    height:52vw;
    position:relative;
    margin-top:3vw;
    padding-top:10vw;
    z-index:0;
    @media (max-width: 600px) {
      height:75vw;
    }
    .splide{
    }
    .splide__pagination {
      bottom: -5.5vw;    /* 好きな位置へ */
      gap:0.5vw;
    }
    .splide__pagination__page{
      width:0.7vw;
      height:0.7vw;
    }
    .splide__pagination__page.is-active {
      background: #d33d3d;
    }
    .tag{
      position: absolute;
      right:5vw;
      bottom:5vw;
      img{
        width:15vw;
        @media (max-width:700px) {
          width:20vw;
        }
        @media (max-width:500px) {
          width:30vw;
        }
      }
         @media (max-width:500px) {
          bottom:4vw;
        }
    }
`;

const Banner = () => {
  return (
    <Set>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          perMove: 1,
          dragMinThreshold: 2000,
          focus: 'center',         // PCでは中央表示
          padding: '25%',          // PCでは左右見切れ

          arrows: false,
          autoplay: true,
          interval: 3000,
          drag: true,
          pauseOnHover: true,
          pagination: true,
          gap: "4vw",

          breakpoints: {
            600: {
              perPage: 1,
              padding: "10%",
            },
          }
        }}
      >
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide1} alt="スライド1" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide2} alt="スライド2" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide3} alt="スライド3" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide4} alt="スライド4" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide5} alt="スライド5" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide6} alt="スライド6" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide7} alt="スライド7" />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link to='/news'> 
            <img src={Slide8} alt="スライド8" />
          </Link>
        </SplideSlide>
      </Splide>

      <div className="tag">
        <Link to='/news'>
          <img src={BannerTag} alt="" />
        </Link>
      </div>
    </Set>
  );
};

export default Banner;

