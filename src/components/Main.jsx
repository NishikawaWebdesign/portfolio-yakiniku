import React from 'react'

import styled from 'styled-components'

import Navi from './Navi'
import Header from './Header'
import Banner from './Banner'
import Course from './Course'
import Menu from './Menu'
import Gallery from './Gallery'
import Reserve from './Reserve'
import News from './News'
import Footer from './Footer'

import Background from '../assets/background-photo.png'

const Set1 = styled.section`
overflow-x:hidden;
background: linear-gradient(
  0deg,        
  #f5f3f3 0%,
  #e8e7e7 80%,
  #d2d2d2 100%
);
`
const Set2 = styled.section`
  position: relative;  /* ←必須：絶対配置の基準にする */
  overflow:hidden;
  background: linear-gradient(
    180deg,        
    #f5f3f3 0%,
    #e8e7e7 80%,
    #d2d2d2 100%
  );

  .background {
    position: absolute;
    top: 23vw;
    left: 0;
    width: 100%;
  }
`;


const Main = () => {
  return (
    <div className="main">
      <Set1>
        <Navi/>
        <Header/>
        <Banner/>
        <Course/>
        <Menu/>
        <Gallery/>
      </Set1>
      <Set2>
        <div className="background">
          <img src={Background} alt="" />
        </div>
        <Reserve/>
        <News/>
      </Set2>
      <Footer/>
    </div>
  )
}

export default Main