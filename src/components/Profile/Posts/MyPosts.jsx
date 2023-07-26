import styled from "@emotion/styled";
import Post from "./Post";

const MyPosts = ({ className }) => {
  const postData = [
    { id: 1, message: 'Hi! How are you?', likesCount: 5 },
    { id: 2, message: 'It is my first post.', likesCount: 3},
  ];

  return (
    <div className={className}>
      <div>
        <h2>My post</h2>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message={ postData[0].message} likesCount={postData[0].likesCount} />
      <Post message={ postData[1].message} likesCount={postData[1].likesCount} />
    </div>
  );
};

export default styled(MyPosts)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
