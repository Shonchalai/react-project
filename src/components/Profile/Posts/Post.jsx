import styled from "@emotion/styled";

const Post = ({ className, message, likesCount }) => {
  return (
    <div className={className}>
      <img
        src="https://pbs.twimg.com/profile_images/1311008414156423170/Kxu_7mQS_400x400.jpg"
        alt="Avatar"
      ></img>
      {message}
      <button>Like {likesCount}</button>
    </div>
  );
};

export default styled(Post)`
  display: flex;

  & > img {
    width: 50px;
    border-radius: 50%;
  }
`;
