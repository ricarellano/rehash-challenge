import React from 'react'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

import styles from '../styles/Chat.module.css'

const ChatLog = ({ chats }) => {
  let i = 0

  return (
    <div className={styles.chatLog} >
      {chats.map(chatMessage => {
        i = i + 1
        return <ChatMessage key={`chat${i}`} chatMessage={chatMessage} />
      })}
    </div>
  )
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      userEmail: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog

