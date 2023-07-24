// import React from 'react'
import styled from '@emotion/styled'

const Header = ({className}) => {
  return (
    <div className= {className}>
      <img src='/social-media_8879440.png' alt='Logo'></img>
    </div>
  )
}

export default styled(Header)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 15px;
  background-color: #fff;;
  border-bottom: 1px solid #e7edf2;

  & > img {
    width: 40px;
  }
  `;