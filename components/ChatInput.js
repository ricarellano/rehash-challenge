import React, {useState} from 'react'
import styles from '../styles/Chat.module.css'


const ChatInput = ({sendMessage}) => {
    const [message, setMessage] = useState();
    const handleSubmit = e => {
        e.preventDefault()
        sendMessage(message);
        setMessage('');
    }
    const handleChange = e => {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            className={styles.messageInput}
            type="text" 
            name="name" 
            value={message} 
            placeholder="Send Message"
            onChange={handleChange}
            />
            <button className={styles.messageBtn}>Send</button>
        </form>
    )
}

export default ChatInput
