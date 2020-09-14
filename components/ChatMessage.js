import React from 'react'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'

import styles from '../styles/Chat.module.css'

const ChatMessage = ({ chatMessage }) => {
  const avatarUrl = GravatarApi.imageUrl({
    email: chatMessage.userEmail,
    parameters: { size: '50', d: 'monsterid'},
  }).replace('http', 'https')

  return (
    <div className={styles.chatMessage}>
      <div className={styles.chatText}>{chatMessage.message}</div>
      <img className={styles.profileImage} src={avatarUrl} />
    </div>
  )
}

ChatMessage.propTypes = {
  chatMessage: PropTypes.object.isRequired,
}

export default ChatMessage
