import styled from "@emotion/styled"

const ProfileInfo = ({className}) => {
  return (
    <div className={className}>
      <img src='https://e0.pxfuel.com/wallpapers/516/321/desktop-wallpaper-cool-grumpy-cat-cat-meme-background-background.jpg'></img>
      <div>
        ava + description
      </div>
    </div>
  )
}
export default styled(ProfileInfo)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
