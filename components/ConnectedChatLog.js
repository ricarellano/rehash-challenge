import { connect } from 'react-redux'
import ChatLog from './ChatLog'

/* Not currently hooked up. Boilerplate here in case you want to use redux */
/* Feel free to toss and set up how you'd like */

const mapStateToProps = state => {
  return {
    chats: state.chats,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ConnectedChatLog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatLog)

export default ConnectedChatLog
