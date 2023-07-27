import styled from "@emotion/styled";
import Post from "./Post";

const MyPosts = ({ className }) => {
  const posts = [
    { id: 1, message: 'Hi! How are you?', likesCount: 5 },
    { id: 2, message: 'It is my first post.', likesCount: 3},
  ];

  const postsElement = [posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)];

  return (
    <div className={className}>
      <div>
        <h2>My post</h2>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default styled(MyPosts)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
