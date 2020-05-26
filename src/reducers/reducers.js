import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cart_reducer from './cart_reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    cart_reducer:cart_reducer
})