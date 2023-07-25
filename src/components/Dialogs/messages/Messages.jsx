import MessageItem from './MessageItem'
import styled from '@emotion/styled'

const Messages = ({className}) => {
  return (
    <div className={className}>
      <MessageItem />
      <MessageItem />
    </div>
  )
}

export default styled(Messages)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px;
`