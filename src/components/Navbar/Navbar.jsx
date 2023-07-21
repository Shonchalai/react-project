// import React from 'react'
import styled from '@emotion/styled'

const NavbarStyle = styled.div`
  background-color: #73a1b2;
  width: 160px;

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Navbar = () => {
  return (
    <NavbarStyle>
      <a href='/profile'>Profile</a>
      <a href='/messages'>Messages</a>
      <a href='/friends'>Friends</a>
      <a href='/news'>News</a>
    </NavbarStyle>
  )
}

export default Navbar