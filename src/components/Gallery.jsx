import React from 'react'
import styled from 'styled-components'
import GalleryPhoto from '../assets/gallery-photo.png'

const Set = styled.div`
    img{
        width: 78vw;
        margin: 18vw auto 0;
        padding-bottom:10vw;
        @media (max-width: 600px) {
          width:100%;
        }
    }
`

const Gallery = () => {
  return (
    <Set>
        <div className="gallery">
            <img src={GalleryPhoto} alt="" />
        </div>
    </Set>
  )
}

export default Gallery