import styled from "@emotion/styled";
import Post from "./Post";

const MyPosts = ({ className, posts }) => {

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
