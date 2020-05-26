import {
    SET_DATA_TO_CART_REDUCER,
    ADD_CART_PRODUCTS,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_PRODUCT_IN_CART
} from './types'
import { setCookie } from '../tools/cookie'


export const setDataToCartReducer = (name, value) => async dispatch => {
    dispatch({
        type: SET_DATA_TO_CART_REDUCER,
        payload: { name, value }
    })
}



export const addCartProducts = (product, cart_list, increment_amount) => async dispatch => {
    let new_list = JSON.parse(JSON.stringify(cart_list))
    
   
    let new_id = `${product.id}_${product.selected_size}`
    //create product cart id
    product['cart_id'] = product.size ? new_id : product.id
    let includes = cart_list.filter(m => m.cart_id === product.cart_id)[0]
     //if product not in cart
    if (!includes) {
        let amount = product.amount ? product.amount : 1
        if(increment_amount){
            amount = increment_amount
        }
        product['amount'] = amount
        product['total'] = amount * product.price
        new_list = [...new_list, product]
    }
    //if product already in cart
    else {
        let existing_product = cart_list.filter(m => m.cart_id === product.cart_id)[0]
        let amount = existing_product.amount
        if(increment_amount){
            amount = existing_product.amount + increment_amount
        }else{
            amount++
        }
        product['amount'] = amount
        product['total'] = amount * product.price
        let index = new_list.findIndex(m => m.cart_id === product.cart_id)
        new_list.splice(index, 1, product)
    }
    setCookie('shopping-cart', JSON.stringify(new_list))
    dispatch({
        type: ADD_CART_PRODUCTS,
        payload: new_list
    })
}




export const removeFromCart = (product, cart_list) => async dispatch => {
    let new_list = JSON.parse(JSON.stringify(cart_list))
    new_list = new_list.filter(m => m.cart_id !== product.cart_id)
    setCookie('shopping-cart', JSON.stringify(new_list))

    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: new_list
    })
}


export const updateProductInCart = (product, cart_list) => async dispatch => {
    let new_list = JSON.parse(JSON.stringify(cart_list))
    product.total = product.amount * product.price
    let index = new_list.findIndex(m => m.cart_id === product.cart_id)
    new_list.splice(index, 1, product)
    setCookie('shopping-cart', JSON.stringify(new_list))
    dispatch({
        type: UPDATE_PRODUCT_IN_CART,
        payload: new_list
    })
}


