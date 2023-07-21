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
      <a>Home</a>
      <a>Profile</a>
      <a>Messages</a>
      <a>Friends</a>
      <a>Events</a>
    </NavbarStyle>
  )
}

export default Navbar