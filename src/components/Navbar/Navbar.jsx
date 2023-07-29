import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Navbar = ({ className, friends}) => {

  return (
    <>
      <div className={className}>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/messages'>Messages</NavLink>
        <NavLink to='/news'>News</NavLink>
        <div>
          <NavLink to='/friends'>Friends </NavLink>
          {friends.map((f) => (
              <NavLink to={`/friends/${f.id}`} key={f.id}>
                {f.name}
              </NavLink>
            ))}
        </div>
      </div>
    </>
  )
}

export default styled(Navbar)`
  background-color: #f8f8f8;
  width: 360px;
  padding: 90px 16px 30px;

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 30px;
    padding: 0 6px;
    color: #626c72;
    font-size: 15px;
    text-decoration: none;
  }
`;