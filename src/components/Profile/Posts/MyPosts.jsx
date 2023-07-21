// import React from 'react'
import Post from "./Post"

const MyPosts = () => {
  return (
    <div>
      <div>
        <h2>My post</h2>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi! How are you?' count='5'/>
      <Post message='It is my first post.' count='6'/>
    </div>
  )
}

export default MyPosts