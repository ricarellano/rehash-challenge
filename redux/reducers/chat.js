import initialState from '../initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message]
    case 'YOUR_TYPE':
    default:
      return state
  }
}

export default reducer
