import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'
import styled from '@emotion/styled'

const Dialogs = ({ className, messages, dialogs }) => {

  return (
    <div className={className}>
      <Messages messages={ messages } />
      <DialogsList dialogs={ dialogs } />
    </div>
  )
}

export default styled(Dialogs)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fefefe;
  color: #29292d;
  border-left: 1px solid #e7edf2;
  border-right: 1px solid #e7edf2;
`;