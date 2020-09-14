import { combineReducers } from 'redux'
import ChatReducer from './chat'

const reducer = combineReducers({
  chats: ChatReducer,
})

export default reducer
