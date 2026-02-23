import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import MainTheme from '../assets/news-main-theme.png'
import NewsTag from '../assets/news-tag.png'
import AccessTag from '../assets/news-accesstag.png'


const Set = styled.div`
    position: relative;
    z-index:1;
    padding-bottom:9vw;
     @media (max-width: 600px) {
        padding-bottom:20vw
    }
    .main-theme{
        img{
            width: 9.4vw;
            margin:10vw auto 3vw;
            @media (max-width: 600px) {
                width:20vw;
                margin-top:35vw;
            }
        }
    }
    .all-content{
        display:flex;
        align-items:flex-end;
        justify-content:center;
        gap: 8vw;
        @media (max-width: 600px) {
            /* flex-direction:column;
            display:center,center */
        }
        .notflex{
            .content{
                margin-top:4.5vw;
                @media (max-width: 600px) {
                    margin:15vw auto 0;
                    transform: translateX(8vw) scale(2);

                }
                .sub{
                    display: flex;
                    align-items:center;
                    margin-bottom:0.8vw;
                    .date{
                        font-family:"BIZ UDPGothic";
                        font-size:0.93vw;
                        opacity: 0.8;
                        letter-spacing:0.5px;
                    }
                    .tag{
                        img{
                            width:6.5vw;
                        }
                    }
                }
                .information{
                    font-size:1.13vw;
                    font-family:"BIZ UDPGothic";
                    letter-spacing:1.5px;
                    transition:0.2s ease;
                    &:hover{
                        opacity: 0.45;
                    }
                }
            }
        }
    }
    .accesstag{
        img{
            width: 11vw;
            @media (max-width: 600px) {
                transform: translate(0, 10vw);
                width:19vw;
            }
        }
        transition:0.3s ease;
        &:hover{
            opacity:0.6;
        }
    }
`

const articles = [
    { 
        date:"2025.11.4", 
        content:"【XXXXXXX】XXXXXXXXXXXXX" ,
        link:'/news/1'},
    { 
        date:"2025.10.25", 
        content:"【XXXX】XXXXX“XXXXXXXX”XXXXXX",
        link:'/news/2',
     },
    { 
        date:"2025.10.11", 
        content:"【XXXXXXXX】XXXXXXXXXXXXXXXX",
        link:'/news/3',
    },
    { 
        date:"2025.10.9", 
        content:"【XXXXXXXX】XXXX" ,
        link:'/news/4',

    }
];

const News = () => {

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Set>
      <div className="news">
        <div className="main-theme">
          <img src={MainTheme} alt="" />
        </div>
        <div className="all-content">
            <div className="notflex">
                {sortedArticles.map((article, index) => (
                    <Link to='/news'>
                        <div className="content" key={index}>
                            <div className="sub">
                                <div className="date">
                                    <p>{article.date}</p>
                                </div>
                                <div className="tag">
                                    <img src={NewsTag} alt="" />
                                </div>
                            </div>

                            <div className="information">
                                <p className="context">{article.content}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Link to='/news'>
                <div className="accesstag">
                    <img src={AccessTag} alt="" />
                </div>
            </Link>
        </div>
      </div>
    </Set>
  );
};

export default News;
