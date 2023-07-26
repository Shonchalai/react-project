import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const DialogItem = ({className, name, id}) => {
  return (
    <Link to={'/dialogs/' + id} className={className}>
      {name}
    </Link>
    
  )
}

export default styled(DialogItem)`
  display: flex;
  text-decoration: none;
`