import React from 'react'
import styled from '@emotion/styled'

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`

const Post = (props) => {
  return (
    <div>
      <Avatar src='https://pbs.twimg.com/profile_images/1311008414156423170/Kxu_7mQS_400x400.jpg' alt='Avatar'></Avatar>
      {props.message}
      <button>Like { props.count}</button>
    </div>
  )
}

export default Post