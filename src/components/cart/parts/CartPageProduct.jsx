import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/actions'
import Incrementor from '../../parts/incrementor/Incrementor'
import DeleteIcon from '@material-ui/icons/Delete';
import { PRODUCT_PAGE_ROUTE, CATEGORY_PRODUCTS_PRODUCT } from '../../../tools/routes';
import {Link} from 'react-router-dom'
class CartPageProduct extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    loadImg = () => {
        this.setState({
            img_loaded:true
        })
    }
    updateProduct = (name, value) => {
        const { product } = this.props
        const { cart_list } = this.props.cart_reducer
        let updated_product = JSON.parse(JSON.stringify(product))
        updated_product[name] = value
        this.props.updateProductInCart(updated_product, cart_list)
    }
    updateState = () => {

    }
    render() {
        const { product } = this.props
        const {img_loaded} = this.state
        const { cart_list } = this.props.cart_reducer
        
        return (
            <li 
         
            className='cart__page__product'>
              <Link 
               to ={
                product.category_type ? 
                CATEGORY_PRODUCTS_PRODUCT
                .replace(':category_type', product.category_type)
                .replace(':product_type', product.type)
                .replace(':product_id', product.id)   :
                PRODUCT_PAGE_ROUTE
                .replace(':product_type', product.type)
                .replace(':product_id', product.id)
                }
              >
              <figure
                    className='cart__page__product__img'
                >
                    <img 
                    style ={{
                        opacity:img_loaded ? 1 : 0
                    }}
                    onLoad = {() => this.loadImg()}
                    src={product.img} alt="" />
                    <aside
                                id={img_loaded ? 'figure__img__loader--disabled'  :''}
                                className='figure__img__loader'></aside>
                </figure>
              </Link>
                <section>

                <h4 className='cart__page__product__title'>{product.title}</h4>
                    <h3 
                    style ={{
                        marginBottom:!product.size ? '30px' : ''
                    }}
                    className='cart__page__product__price'>{`$${product.price}`}</h3>
                       {product.size ? <aside className='cart__page__product__size'>
                            {product.selected_size}
                        </aside> : ''}
                    <Incrementor
                        property_name='amount'
                        updateParent={this.updateProduct}
                        value={product.amount}
                    />
                    <button 
                    onClick = {() => this.props.removeFromCart(product, cart_list)}
                    className='cart__page__product__delete'><DeleteIcon /></button>
                </section>
                    <button 
                     onClick = {() => this.props.removeFromCart(product, cart_list)}
                    className='cart__page__product__delete--mobile'>REMOVE</button>


            </li>
        )
    }
}

function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default (connect(mapStateToProps, actions)(CartPageProduct))
