import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Frame1 from '../assets/course-frame1.png'
import Frame2 from '../assets/course-frame2.png'
import Frame3 from '../assets/course-frame3.png'

import Photo1 from '../assets/course-photo.png'
import MainTheme from '../assets/course-main-theme.png'
import Acesstag from '../assets/course-tag.png'

const Set = styled.div`

@media (max-width:600px) {
  
  .frame0{
    position: relative;
    left: 35.5vw;
  }

  .frame1{
    position: relative;
    left: 35.5vw;
  }

  .frame2{
    position: relative;
    left: 35.5vw;
  }

}


  .main-theme{
    position:relative;
    width:11.3vw;
    margin:10vw auto 6vw;
    @media (max-width: 600px) {
      width:25vw;
      margin-bottom:20vw;
    }
  }
  .course{
    position:relative;
    display:flex;
    justify-content: center;
    gap:3vw;
    @media (max-width: 600px) {
      gap:40vw;
      flex-direction: column; /* ← これで縦並び */
    }

    .course-item{
      position:relative;
      img{
        width:26vw;
        &.photo0,&.photo1,&.photo2{
          position:absolute;
          top:24%;
          left: 50%;
          transform: translate(-50%, -50%);
          width:21.5vw;
        }
      }
      &.course-item-0,&.course-item-1,&.course-item-2{
        @media (max-width:600px) {
          top:20vw;;
          transform:scale(2);
        }
      }
    }

    .theme{
      position:relative;
      display:flex;
      align-items:flex-end;
      justify-content: space-between; /* 左右に分ける */
      width:20.5vw;
      /* letter-spacing:1px; */
      margin:auto;
      top:-13vw;
      /* margin-top:-5vw;s */
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 0.5px;
        background: #000000;
        @media (max-width:600px) {
          height:0.1px;
          bottom:-2px;
        }
      }

      .course-name{
        position:relative;
        font-family:Noto Serif JP;
        font-weight:600;
        font-size:1.8vw;
        span{
          font-size:1.5vw;
        }
        @media (max-width:600px) {
          font-size:1.95vw;
        }
      }
      .course-price{
        position:relative;
        font-family:Noto Serif JP;
        font-weight:700;
        font-size:1.1vw;
        @media (max-width:600px) {
          font-size:1.25vw;
        }
      }
    }
    .menu{
      position:relative;
      top:-13.2vw;

      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      width:20.5vw;
      height:8.4vw;
      margin:auto;

      font-size:1.0vw;
      font-family:Noto Serif JP;
      font-weight:600;
      line-height:1.3;
      p{
        position:relative;
        &::after {
        content: "";
        position: absolute;
        bottom: -2.8px;
        left: 0;
        width: 100%;
        height: 2.1px;
        background: #000000;
        @media (max-width: 600px) {
          display:none;
        }
      }
      transition:0.4s ease;
      &:hover,&:hover::after{
        opacity:0.4;
      }
      }
    }
    .accesstag{
      position:absolute;
      width:10.3vw;
      right:8.3vw;
      bottom:5vw;
      transition:0.3s ease;
      &:hover,&:active{
        opacity:0.6;
      }
      @media (max-width:600px) {
        width: 20vw;
        bottom:-40vw;
      }
    }
  }
`

const courses = [
  {
    name: '和牛',
    price: 12000,
    items: ['特選和牛カルビ', '和牛ロース'],
    link: '/course'
  },
  {
    name: 'プレミアム',
    price: 8400,
    items: ['特上タン', '特上カルビ','ホルモン盛り'],
    link: '/course'
  },
  {
    name: 'スタンダード',
    price: 6200,
    items: ['上カルビ', '上ロース', 'ハラミ','サラダ','ライスorクッパ'],
    link: '/course'
  }
];

const frames = [Frame1, Frame2, Frame3];
const photos = [Photo1, Photo1, Photo1];



const Course = () => {
  return (
    <Set>
      <div className="main-theme">
        <img src={MainTheme} alt="" />
      </div>
      <div className="course">

        {courses.map((course, index) => (
          <div className={`course-item course-item-${index}`} key={index}>

            <img className={`frame${index}`} src={frames[index]} alt="" />
            <img className={`photo${index}`} src={photos[index]} alt="" />


            <div className="theme">
              <p className='course-name'>{course.name}<span>コース</span></p>
              <p className='course-price'>{course.price}円</p>
            </div>
            <div className="menu">
              <ul>
                {course.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link to={course.link}>
                <p>その他</p>
              </Link>
            </div>
          </div>
        ))}
        <div className="accesstag">
          <Link to='/course'>
            <img src={Acesstag} alt="" />
          </Link>
        </div>
      </div>
    </Set>
  )
}


export default Course