// import React from 'react'
import styled from '@emotion/styled'
import MyPosts from './posts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'

const Profile = ({className, posts}) => {
  return (
    <div className={className}>
      <ProfileInfo />
      <MyPosts posts={posts} />
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