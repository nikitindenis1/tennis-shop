import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import products_data from '../../data/data';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import './product-page.css'
import Incrementor from '../parts/incrementor/Incrementor';
import SelectBox from '../parts/selectbox/SelectBox';
import StatusPopup from '../parts/add-success/StatusPopup';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import BreadCrumbs from '../parts/bread-crumbs/BreadCrumbs';
import Fade from 'react-reveal/Fade';


class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
            amount: 1
        }
    }



    componentDidMount() {
        const product_id = this.props.match.params.product_id
        this.setProduct(product_id)
    }


    setProduct = (product_id) => {
        window.scrollTo(0,0)
        let type = ''
        let product
        if (product_id) {
            Object.entries(products_data).forEach(([key, value]) => {
                value.filter(m => {
                    if (m.id === product_id) {
                        type = key
                        product = m
                        product['amount'] = 1
                        this.setState({
                            type,
                            product,
                            product_id
                        })
                    }
                })
            })
        }
    }


    updateProduct = (name, value) => {
        const { product } = this.state
        if (name === 'amount') {
            this.setState({
                amount: value
            })
        } else {
            let product_to_add = JSON.parse(JSON.stringify(product))
            product_to_add[name] = value
            this.setState({
                product: product_to_add
            })
        }
    }


    componentWillReceiveProps(nextProps) {
        const { product_id } = this.state
        if (nextProps.match.params.product_id !== product_id) {
            this.setProduct(nextProps.match.params.product_id)
        }
    }
    updateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    closePopup = () => {
        this.setState({
            added: false,
             amount: 1
        })
    }
    addProduct = () => {
        const { product, amount } = this.state
        const { cart_list } = this.props.cart_reducer
        let product_to_add = JSON.parse(JSON.stringify(product))
        product_to_add['amount'] = amount
        if (product.size && product.selected_size) {
            this.props.addCartProducts(product, cart_list, amount)
            this.setState({
                added: true
            })
            this.updateProduct('selected_size', '')
        } else {
            this.setState({
                error: true
            })
        }
        if (!product.size) {
            this.props.addCartProducts(product, cart_list, amount)
            this.setState({
                added: true,

            })
            this.updateProduct('selected_size', '')
        }

    }
    render() {
        const { error, product, amount, added , img_loaded} = this.state
        return (
            product ? <div className='product__page'>
                <BreadCrumbs
                    product_name={product.title}
                />
                <StatusPopup
                    with_overlay={true}
                    title='Product added to cart'
                    handleFunction={this.closePopup}
                    svg={<CheckCircleOutlineOutlinedIcon />}
                    button_text='CLOSE'
                    active={added}
                />
                <div className='product__page__content flex__center'>
                   <Fade clear>
                   <figure className='product__page__img'>
                        <img src={product.img} alt="" 
                        style ={{
                            opacity:img_loaded ? 1 : 0
                        }}
                        onLoad = {() => this.setState({
                            img_loaded:true
                        })}
                        />
                          <aside
                                id={img_loaded ? 'figure__img__loader--disabled'  :''}
                                className='figure__img__loader'></aside>
                    </figure>
                   </Fade>
                   <Fade clear>
                    <section className='product__page__details'>
                     
                       <h3>{product.title}</h3>
                      
                   
                     <h4>{`$${product.price}`}</h4>
                    
                        {product.size ? 
                            <SelectBox
                            property_name='selected_size'
                            value={product.selected_size}
                            select={this.updateProduct}
                            options={product.size ? product.size : []}
                            error={error}
                            updateParentState={this.updateState}
                        /> : ''}
                      
                       <Incrementor
                            property_name='amount'
                            updateParent={this.updateProduct}
                            value={amount}
                        />
                      
                      
                       <button
                            className='product__page__add__btn'
                            onClick={() => this.addProduct()}>ADD TO CART</button>
                      

                    </section>
                    </Fade>
                </div>
            </div> : ''
        );
    }
}


function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default withRouter(connect(mapStateToProps, actions)(ProductPage))
