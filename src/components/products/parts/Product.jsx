import React, { Component } from 'react'
import { PRODUCT_PAGE_ROUTE, CATEGORY_PRODUCTS_PRODUCT } from '../../../tools/routes';
import { Link } from 'react-router-dom'


class Product extends Component {
    constructor() {
        super()
        this.state = {

        }
    }



    loadImg = () => {
        this.setState({
               loaded:true
        })
    }
    render() {
        const { loaded } = this.state
        const { product } = this.props
        return (
            <li className='rackets__list__element list__element'>

                <Link to={
                    product.category_type ?
                        CATEGORY_PRODUCTS_PRODUCT
                            .replace(':category_type', product.category_type)
                            .replace(':product_type', product.type)
                            .replace(':product_id', product.id) :
                        PRODUCT_PAGE_ROUTE
                            .replace(':product_type', product.type)
                            .replace(':product_id', product.id)
                }>
                    <figure
                        className='list__element__img'
                    >
                            <img
                                style={{
                                    opacity: loaded ? 1 : 0
                                }}
                                src={product ? product.img : ''}
                                onLoad={() => this.loadImg()} /> 
                                 <aside
                                id={loaded ? 'figure__img__loader--disabled'  :''}
                                className='figure__img__loader'></aside>
                           </figure>
                </Link>

                <h4>{product.title}</h4>
                <h3>{`$${product.price.toFixed(2)}`}</h3>
                <button
                    onClick={() => this.props.handleCart(product)}
                    className='list__element__cart__btn'>
                    <span className='flex__center'>

                        <p>Add to cart</p>

                    </span>
                </button>
            </li>
        )
    }
}

export default Product