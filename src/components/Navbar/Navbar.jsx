// import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

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
      <Link to='/profile'>Profile</Link>
      <Link to='/messages'>Messages</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/news'>News</Link>
    </NavbarStyle>
  )
}

export default Navbar