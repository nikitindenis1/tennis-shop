import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import CartPreviewProduct from './parts/CartPreviewProduct';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom'
import './cart.css'
import { CART_ROUTE } from '../../tools/routes';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';


class CartPreview extends Component {
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);

    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        const {  show_cart } = this.props.cart_reducer
        let close = true
        if(event.target.classList && event.target.classList.value.indexOf('navbar__cart__element') > -1){
            close = false
        }
        
        if (this.wrapperRef &&
            !this.wrapperRef.contains(event.target) && show_cart && close) {
                this.hideList()
        }
    }

    hideList = () => {
        this.props.setDataToCartReducer('show_cart', false)
        const body = document.querySelector('body')
        body.style.overflow = 'auto'
    }
  
    render() {
        const { cart_list, show_cart } = this.props.cart_reducer
        return (
            <div className='cart'

                id={show_cart ? 'cart--active' : ''}
            >
               
                <section className="overlay"
                ></section>
                <div
                    ref={this.setWrapperRef}
                    className='cart__list'>
                         <button
                         onClick = {() => this.hideList()}
                         className='close__cart__btn'><CloseIcon /></button>
                        <header>
                           Cart Preview
                        </header>
                    <ul>
                        {
                            cart_list && cart_list.length > 0 ?
                            cart_list.map(product => {
                                return <CartPreviewProduct
                                key = {product.cart_id}
                                    product={product}
                                    hideList = {this.hideList}
                                />
                            }) : 
                            <span className='empty__cart__preview flex__column'>
                                     <h3> CART IS EMPTY</h3>
                               <figure className='flex__center'> <ShoppingCartIcon /></figure>
                          
                                </span>
                        }
                    </ul>
                   {cart_list && cart_list.length > 0 ?  <Link
                    className='go__to__cart flex__center'
                    to ={CART_ROUTE}>
                        <p>Go To Shopping Cart</p>
                        <ArrowForwardIcon />
                    </Link>  :''}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default withRouter(connect(mapStateToProps, actions)(CartPreview))
