// import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <Link to='/profile'>Profile</Link>
      <Link to='/messages'>Messages</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/news'>News</Link>
    </div>
  )
}

export default styled(Navbar)`
  background-color: #f8f8f8;
  width: 360px;
  padding: 90px 16px 30px;

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 30px;
    padding: 0 6px;
    color: #626c72;
    font-size: 15px;
    text-decoration: none;
  }
`;