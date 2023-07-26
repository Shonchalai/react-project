// import React from 'react'
import styled from '@emotion/styled'
import MyPosts from './posts/MyPosts'
import ProfileInfo from './profile_info/ProfileInfo'

const Profile = ({className}) => {
  return (
    <div className={className}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )  
}

export default styled(Profile)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: #d0d5ce;
`;