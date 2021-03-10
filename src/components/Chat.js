import React, { useEffect, useRef } from 'react'
import {
  ChatContainer,
  HeaderLeft,
  HeaderRight,
  Header,
  ChatMessages,
  ChatBottom,
} from './Chat-styled'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Message from './Message'

function Chat() {
  const chatRef = useRef(null)
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  )
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [roomId, loading])
  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data()
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef}></ChatBottom>
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  )
}

export default Chat
