// import React from 'react'
import styled from '@emotion/styled'

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #6e8658;
  height: 100px;
  width: 100%;
`
const Logo = styled.img`
  width: 39px;
  height: 39px;
  margin: 20px;
`

const Header = () => {
  return (
    <HeaderStyle>
        <Logo src='/social-media_8879440.png' alt='Logo'></Logo>
    </HeaderStyle>
  )
}

export default Header