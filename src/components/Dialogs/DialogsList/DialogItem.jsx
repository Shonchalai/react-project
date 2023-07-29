import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const DialogItem = ({className, name, id, photoUrl}) => {
  return (
    <Link to={'/dialogs/' + id} className={className}>
      <img src={photoUrl} alt="Avatar"></img>
      {name}
    </Link>
    
  )
}

export default styled(DialogItem)`
  display: flex;
  text-decoration: none;
  align-items: center;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 14px;
    margin-bottom: 10px;
  }
`