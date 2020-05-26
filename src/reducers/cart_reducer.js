
  
import {
    SET_DATA_TO_CART_REDUCER,
    ADD_CART_PRODUCTS,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_PRODUCT_IN_CART
} from '../actions/types'
  
  const initialState = {
    cart_list:[]
}

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_DATA_TO_CART_REDUCER :
        const {name, value} = action.payload
        return {
            ...state,
            [name]:value
        }
        case ADD_CART_PRODUCTS :
            return {
                ...state,
                cart_list:action.payload
            }
          case REMOVE_PRODUCT_FROM_CART :
            return {
              ...state,
              cart_list:action.payload
            }
            case UPDATE_PRODUCT_IN_CART:
              return {
                ...state,
                cart_list:action.payload
              }
    default:
      return state
  }
}