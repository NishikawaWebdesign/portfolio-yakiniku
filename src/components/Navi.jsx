import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import reserveBtn from '../assets/reservation-button.png'


const Set = styled.nav`
  position: fixed;
  top: ${(props) => (props.show ? "0" : "-180px")};
  left: 0;
  width: 100%;
  height: 180px;
  z-index: 999;
  transition: top 0.35s ease;

  ul {
    position: absolute;
    display: flex;
    gap: 3.8vw;
    right: 2vw;
    top: 70px;
    @media (max-width:800px) {
      top:40px;
    }

    li {
      color: #000000;
      font-size:clamp(20px,1.63vw, 300px);
      height: 3.4vw;
      position: relative;

      @media (max-width:800px) {
        font-size:3vw;
      }
      @media (max-width:500px) {
        font-size:3.6vw;
      }
      a.active::after {
        width: 100%;
      }

      a {
        position: relative;
        display: inline-block;
        
        &::after {
          content: "";
          position: absolute;
          top:2.8vw;
          left: 0;
          width: 0%;
          height: 3px;
          background: rgba(149, 52, 52, 1);
          transition: 0.25s ease;
          @media (max-width:1400px) {
            top:5.2vw;
            display:none;
          }
        }

        &:hover::after {
          width: 100%;
          cursor: pointer;
        }
      }

      &.reservation {
        margin-top: -4.2%;
        margin-left: -2%;
        width: 10vw;
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.4));
        @media (max-width: 1100px) {
          width:12vw;
          margin-top:-3%;
        };
        @media (max-width: 700px) {
          width:16vw;
          margin-top:-3%;
        };
        a::after {
          display: none;
        }

        &:hover {
          transform: translate(5px, 5px);
          transition: ease 0.1s;
          filter: none;
        }
      }
    }
  }
`;

const Navi = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current < lastScroll) {
        // 上スクロール → 表示
        setShow(true);
      } else {
        // 下スクロール → 非表示
        setShow(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <Set show={show}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>ホーム</NavLink>
        </li>
        <li>
          <NavLink to="/course" className={({ isActive }) => isActive ? "active" : ""}>コース一覧</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>メニュー</NavLink>
        </li>
        <li>
          <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>キャンペーン</NavLink>
        </li>
        <li className="reservation">
          <NavLink to="/reserve">
            <img src={reserveBtn} alt="" />
          </NavLink>
        </li>
      </ul>
    </Set>
  )
}

export default Navi
