import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import MainTheme from '../assets/menu-main-theme.png'
import Photo1 from '../assets/menu-photo.png'
import Photo2 from '../assets/menu-photo.png'
import Button from '../assets/menu-accesstag.png'

const Set = styled.div`
    .main-theme{
        position:relative;
        width:15.8vw;
        margin:88px auto 7.5vw;
        @media (max-width:600px) {
          margin-top:60vw;
          margin-bottom:14vw;
          width:35vw;
        }
    }
    .menu-items{
        position:relative;
        display:flex;
        justify-content:space-between;
        width:79vw;
        margin: auto;
        @media (max-width: 600px) {
          flex-direction:column;
          align-items:center;
          gap:6vw;
        }
        .menu-photos{
            position: relative;
            .photo{
                width: 36.7vw;
                transition:0.6s ease;
                &:hover{
                  opacity:0.6;
                }
              @media (max-width: 600px) {
                width:88%;
                margin:auto;
              }
            }
            button{
                position: absolute;
                bottom:3vw;
                right:-18px;
                cursor: pointer;
                width: 4.5vw;
                @media (max-width: 600px) {
                  width:7vw;
                  right:13px;
                  bottom:5vw;
                }
                img{
                  transition:transform 0.3s ease;
                  &:hover{
                    transform: scale(1.1);
                  }
                }
            }
            .theme{
                position:relative;
                font-family:Noto Serif JP;
                font-weight:600;
                font-size:1.85vw;
                margin:1.5vw 0 0 20px;
                letter-spacing:2px;
                @media (max-width: 600px) {
                  font-size:3.7vw;
                  margin-left:8vw;
                }
            }
        }
    }
` 

const menus =[
    {
        name:"単品メニュー",
        photo:Photo1,
        link:'/menu'
    },
    {
        name:"飲み放題・ドリンク",
        photo:Photo2,
        link:'/menu'
    }
]

const Menu = () => {
  return (
    <Set>
      <div className="menu">
        <div className="main-theme">
          <img src={MainTheme} alt="main-theme" />
        </div>
        <div className="menu-items">
          {menus.map((menu, index) => (
            <div className="menu-photos" key={index}>
              <div className="photo">
                <img src={menu.photo} alt={`photo-${index}`} />
              </div>
              <Link to={menu.link}>
                <button>
                  <img src={Button} alt={`button-${index}`} />
                </button>
              </Link>
              <div className="theme">
                <p>{menu.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Set>
  )
}

export default Menu