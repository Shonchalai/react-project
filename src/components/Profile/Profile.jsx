// import React from 'react'
import styled from '@emotion/styled'
import MyPosts from './Posts/MyPosts'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: #d0d5ce;
`
const Wallpaper = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const ProfileInfo = styled.div`
  display: flex;
  gap: 10px;
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Profile = () => {
  return (
    <ProfileWrapper>
      <Wallpaper src='https://e0.pxfuel.com/wallpapers/516/321/desktop-wallpaper-cool-grumpy-cat-cat-meme-background-background.jpg'></Wallpaper>
      <ProfileInfo>
        <div>
          ava + description
        </div>
      </ProfileInfo>
      <Posts>
        <MyPosts />
      </Posts>
    </ProfileWrapper>
  )
}

export default Profile