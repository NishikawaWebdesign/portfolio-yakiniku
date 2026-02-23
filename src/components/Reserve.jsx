import React from 'react'
import styled from 'styled-components'

import ReservePhoto from '../assets/reserve.png'

const Set =styled.div`
img{
  position:relative;
    margin: auto;
    padding-top:8vw;
    width: 75vw;
    z-index:1;

    user-select: none;      
    -webkit-user-drag: none;
    -moz-user-drag: none;    
    -o-user-drag: none;    
    
    @media (max-width: 600px) {
      display:none
      /* width:95%; */
    }
}
`

const Reserve = () => {
  return (
    <Set>
        <div className='reserve'>
            <img src={ReservePhoto} alt="" />
        </div>
    </Set>
  )
}

export default Reserve