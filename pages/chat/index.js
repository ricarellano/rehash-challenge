import React, { useState, useEffect } from 'react'
import { loremIpsum } from 'lorem-ipsum'
import styles from '../../styles/Chat.module.css'
import ChatLog from '../../components/ChatLog'
import ChatInput from '../../components/ChatInput'

const emails = [
  'a@b.com',
  'test@rehashstudio.com',
  'steve@jobs.com',
  'hello@world.com',
  'foo@bar.com',
]

export default function Chat() {
  const [chats, setChats] = useState([{
    userEmail: 'me@test.com',
    message: 'Hello world!',
  }])

  const addRandomMessages = () => setTimeout(() => {
    const userEmail = emails[Math.floor(Math.random() * emails.length)]
    setChats([...chats, {
      userEmail,
      message: loremIpsum({ count: Math.floor(Math.random() * 5)}), // number of sentences
    }])
  }, 3000)

  let timeout = null
  useEffect(() => {
    timeout = addRandomMessages()
    return () => clearTimeout(timeout)
  }, [chats])

  const handleSubmit = (message) => {
    // clear timeout before adding a message or it will be overwritten by timeout's old
    // ref to chats
    clearTimeout(timeout)

    // add new message here
    // { your code here }
    setChats([...chats, {
      userEmail: 'me@test.com',
      message, // number of sentences
    }])

    // restart the useEffect loop after message has been added
    timeout = addRandomMessages()
  }

  return (
    <div className={styles.chatContainer}>
      <ChatLog chats={chats} />
      <ChatInput sendMessage={handleSubmit}/>
    </div>
  )
}
