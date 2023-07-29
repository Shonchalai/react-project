import styled from '@emotion/styled';
import FriendsItem from './FriendsItem';

const Friends = ({ className, friends }) => {
  const friendsElement = friends.map((f) => <FriendsItem id={f.id} name={ f.name} key={f.item} />)
  return (
    <div className={className}>
      <h5>Friends</h5>
      {friendsElement}
    </div>
  )
}

export default styled(Friends)`
  display: flex;
  flex-direction: column;
`