import React from 'react'
import DialogsList from './DialogsList/DialogsList'
import Messages from './messages/Messages'
import styled from '@emotion/styled'

const Dialogs = ({className}) => {
  return (
    <div className={className}>
      <Messages />
      <DialogsList />
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
`