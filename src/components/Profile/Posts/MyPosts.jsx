import styled from "@emotion/styled";
import Post from "./Post";

const MyPosts = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h2>My post</h2>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi! How are you?" count="5" />
      <Post message="It is my first post." count="6" />
    </div>
  );
};

export default styled(MyPosts)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
