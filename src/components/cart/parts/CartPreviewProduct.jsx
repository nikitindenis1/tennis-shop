import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux'
import * as actions from '../../../actions/actions'
import {Link} from 'react-router-dom'
import { PRODUCT_PAGE_ROUTE, CATEGORY_PRODUCTS_PRODUCT } from '../../../tools/routes';
class CartPreviewProduct extends Component {
    render() {
        const {cart_list} = this.props.cart_reducer
        const { product } = this.props
      
        return (
            <li className='cart__preview__product flex__center'>
                <Link
                onClick = {() => this.props.hideList()}
                to ={
                    product.category_type ? 
                    CATEGORY_PRODUCTS_PRODUCT
                    .replace(':category_type', product.category_type)
                    .replace(':product_type', product.type)
                    .replace(':product_id', product.id)   :
                    PRODUCT_PAGE_ROUTE
                    .replace(':product_type', product.type)
                    .replace(':product_id', product.id)
                    }>
                <figure>
                    <img src={product.img} alt="" />
                </figure>
                </Link>
                <section className='cart__preview__product__details'>
                    <h3>{product.title}</h3>
                   <span 
                    className='flex__between'
                   >
                   <h2>{`$${product.price.toFixed(2)}`}</h2>
                
                    
            
                  
                   </span>
                </section>
                <section className='cart__preview__product__amount flex__between'>
                {product.amount ?  <h5>{`Amount:${product.amount}`}</h5> : ''}
                {product.selected_size ?  <h5>{`Size:${product.selected_size}`}</h5> : ''}
                
                 <button
                   className='cart__preview__product__remove'
                   onClick = {() => this.props.removeFromCart(product, cart_list)}
                   ><DeleteIcon /></button>
                </section>
            </li>
        );
    }
}


function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default (connect(mapStateToProps, actions)(CartPreviewProduct))
