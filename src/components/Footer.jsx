import React from 'react'
import styled from 'styled-components'

import FooterPhoto from '../assets/footer-photo.png'
import FooterFacebook from '../assets/footer-facebook.png'
import FooterInstagram from '../assets/footer-instagram.png'
import FooterX from '../assets/footer-x.png'
import FooterLine from '../assets/footer-line.png'
import FooterYoutube from '../assets/footer-youtube.png'
import { Link } from 'react-router-dom'

const Set = styled.div`
    .background{
        width:100%;
        background:linear-gradient(
            0deg,
            #000000 0%,
            #353535 100%
        );
        .content{
            position:relative;
            width:73%;
            padding-top:10vw;
            margin:auto;
            @media (max-width: 600px) {
                padding-top:17vw;
                margin-left:20vw;;
            }
            .link{
                position:relative;
                width:80%;
                height:34.6vw;
                display: flex;
                flex-wrap: wrap;
                flex-direction:column;
                color:white;
                @media (max-width: 600px) {
                    height:60vw;
                    transform:scale(1.3)
                }
                .course{
                    width:15vw;
                    height: 15vw;
                    margin-bottom:2.3vw;
                    @media (max-width: 600px) {
                        margin-bottom:1.3vw;
                    }
                    p{
                        font-family:Noto Serif JP;
                        font-weight:400;
                        font-size:1.5vw;
                        margin-bottom:2.3vw;
                        
                        transition:0.3s ease;
                        &:hover{
                            opacity: 0.6;
                        }
                    }
                    li{
                        font-family:Noto Serif JP;
                        font-weight:400;
                        font-size:0.9vw;
                        letter-spacing:2px;
                        opacity:0.8;
                        margin-bottom:1.5vw;

                        list-style: none;
                        position: relative;
                        padding-left: 1.2em;

                        &::before{
                            content: "—"; 
                            position: absolute;
                            left: 0;
                            top: -0.1vw;

                        }

                        transition:0.3s ease;
                        &:hover{
                            opacity: 0.45;
                        }
                    }
                }
                .news{
                    width:15vw;
                    height: 15vw;
                    margin-bottom:2.3vw;
                    @media (max-width: 600px) {
                        margin-bottom:0.3vw;
                    }
                    p{
                        font-family:Noto Serif JP;
                        font-weight:400;
                        font-size:1.5vw;
                        margin-bottom:2.3vw;

                        transition:0.3s ease;
                        &:hover{
                            opacity: 0.6;
                        }
                    }
                    li{
                        font-family:Noto Serif JP;
                        font-weight:400;
                        font-size:0.9vw;
                        letter-spacing:2px;
                        opacity:0.8;
                        margin-bottom:1.5vw;

                        list-style: none;
                        position: relative;
                        padding-left: 1.2em;

                        &::before{
                            content: "—"; 
                            position: absolute;
                            left: 0;
                            top: -0.1vw;

                        }
                        transition:0.3s ease;
                        &:hover{
                            opacity: 0.45;
                        }
                    }
                }
                .menu{
                    width:15vw;
                    height: 20vw;
                    margin-bottom:2.3vw;
                    @media (max-width: 600px) {
                        margin-bottom:1.3vw;
                    }
                    p{
                        font-family:Noto Serif JP;
                        font-weight:400;
                        font-size:1.5vw;
                        margin-bottom:2.3vw;

                        transition:0.3s ease;
                        &:hover{
                            opacity: 0.6;
                        }
                    }
                    li{
                        font-family:Noto Serif JP;
                        font-weight:400;
                        font-size:0.9vw;
                        letter-spacing:2px;
                        opacity:0.8;
                        margin-bottom:1.5vw;

                        list-style: none;
                        position: relative;
                        padding-left: 1.2em;

                        &::before{
                            content: "—"; 
                            position: absolute;
                            left: 0;
                            top: -0.1vw;
                        }
                        transition:0.3s ease;
                        &:hover{
                            opacity: 0.45;
                        }
                    }
                }
                .contact{
                    width:15vw;
                    height: 5vw;
                    font-family:Noto Serif JP;
                    font-weight:400;
                    font-size:1.5vw;
                    margin-bottom:2.3vw;
                    transition:0.3s ease;
                    &:hover{
                        opacity: 0.6;
                    }
                }
                .reserve{
                    width:15vw;
                    height: 3vw;
                    font-family:Noto Serif JP;
                    font-weight:400;
                    font-size:1.5vw;
                    margin-bottom:2.3vw;
                    transition:0.3s ease;
                    &:hover{
                        opacity: 0.6;
                    }
                }
                .privacy{
                    width:15vw;
                    height: 3vw;
                    font-family:Noto Serif JP; 
                    font-weight:400;
                    font-size:1.5vw;
                    margin-bottom:2.3vw;
                    transition:0.3s ease;
                    &:hover{
                        opacity: 0.6;
                    }
                }
                .arellgy{
                    width:15vw;
                    height: 3vw;
                    font-family:Noto Serif JP;
                    font-weight:400;
                    font-size:1.5vw;
                    margin-bottom:2.3vw;
                    transition:0.3s ease;
                    &:hover{
                        opacity: 0.6;
                    }
                }
            }
            .photo{
                position:absolute;
                right:-4vw;
                bottom:2vw;
                img{
                    width:32vw;
                    @media (max-width: 600px) {
                        width:50vw;
                    }
                }
            }
        }
        .icon{
            position:relative;
            display:flex;
            gap:0.5vw;
            top:-2vw;
            margin-left:13vw;
            @media (max-width:600px) {
                top:0;
                margin-left:11vw;
            }
            img{
                width:2.1vw;
                transition:0.3s ease;
                &:hover{
                    opacity: 0.6;
                }
                @media (max-width:600px) {
                    margin-top:5vw;
                    width:4vw;
                }
            }
        }
    }
`

const Footer = () => {
  return (
    <Set>
        <div className="background">
            <div className="content">
                <div className="link">
                    <div className="course">
                        <Link to='/course'>
                            <p>コース一覧</p>
                        </Link>
                        <Link to='/course'>
                            <nav>
                                <li>和牛コース</li>
                                <li>プレミアムコース</li>
                                <li>スタンダードコース</li>
                            </nav>
                        </Link>
                    </div>
                    <div className="news">
                        <Link to='/news'>
                            <p>キャンペーン</p>
                        </Link>
                        <Link to='/news'>
                            <nav>
                                <li>期間限定メニュー</li>
                                <li>お知らせ</li>
                            </nav>
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to='/menu'>
                            <p>メニュー</p>
                        </Link>
                        <Link to='/menu'>
                            <nav>
                                <li>食べ放題メニュー</li>
                                <li>一品</li>
                                <li>サラダ</li>
                                <li>ドリンク</li>
                                <li>デザート</li>
                            </nav>
                        </Link>
                    </div>
                    <div className='contact'>
                        <Link to='/contact'>
                            <p>お問い合わせ</p>
                        </Link>
                    </div>
                    <div className='reserve'>
                        <Link to='/reserve'>
                            <p>店舗検索・予約</p>
                        </Link>
                    </div>
                    <div className='privacy'>
                        <Link to='/privacy'>
                            <p>プライバシーポリシー</p>
                        </Link>
                    </div>
                    <div className='arellgy'>
                        <Link to='/arellgy'>
                            <p>アレルギー情報</p>
                        </Link>
                    </div>
                </div>
                <div className="photo">
                    <img src={FooterPhoto} alt="" />
                </div>
            </div>
            <Link to='/sns'>
                <div className="icon">
                    <img src={FooterFacebook} alt="" />
                    <img src={FooterInstagram} alt="" />
                    <img src={FooterX} alt="" />
                    <img src={FooterLine} alt="" />
                    <img src={FooterYoutube} alt="" />
                </div>
            </Link>
        </div>
    </Set>
  )
}

export default Footer