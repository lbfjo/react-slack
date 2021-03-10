import React from 'react'
import { MessageContainer, MessageInfo } from './Message-styled'
function Message({ message, timestamp, user, userImage }) {
  console.log(userImage)
  return (
    <MessageContainer>
      <img src={userImage} alt=''></img>
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message
