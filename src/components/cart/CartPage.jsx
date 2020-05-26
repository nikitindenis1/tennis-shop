import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import { withRouter } from 'react-router-dom';
import CartPageProduct from './parts/CartPageProduct';
import NumberFormat from 'react-number-format';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StatusPopup from '../parts/add-success/StatusPopup';
import MoodIcon from '@material-ui/icons/Mood';
const popup_text = ['This is only a demo, so no payment is made here :)']

const calcTotal = (arr) => {
    let total = arr.reduce((acc, pilot) => acc + pilot.total, 0)
    return total >= 0 ? total : 0
}

class CartPage extends Component {
    constructor() {
        super()
        this.state = {
        }
    }


    componentDidMount() {
        this.props.setDataToCartReducer('show_cart', false)
        const body = document.querySelector('body')
        body.style.overflow = 'auto'
        window.scrollTo(0, 0)
    }
    togglePopup = (val) => {
        this.setState({
            popup:val
        })
    }
    render() {
        const { cart_list } = this.props.cart_reducer
        const {popup} = this.state
        return (
            <div className='cart__page'>
                 <StatusPopup
                    with_overlay={true}
                    title={popup_text}
                    handleFunction={this.togglePopup}
                    svg={<MoodIcon />}
                    button_text='CLOSE'
                    active={popup}
                />
                <ul className='cart__page__list'>
                    {
                        cart_list && cart_list.length > 0 ?
                            cart_list.map(m => {
                                return <CartPageProduct
                                    product={m}
                                    key={m.cart_id}
                                />
                            }) : <span className='empty__cart'>
                                <h2>YOUR SHOPPING CART IS EMPTY</h2>
                                <figure className='flex__center'> <ShoppingCartIcon /></figure>
                            </span>
                    }
                </ul>
                {calcTotal(cart_list) ? <div className='car__page__total flex__center'>
                    <section className='flex__center'>

                        <aside>
                            <label>TOTAL</label>
                            {cart_list && cart_list.length > 0 ?
                                <NumberFormat
                                    decimalScale='2'
                                    decimalSeparator='.'
                                    value={calcTotal(cart_list)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'} />
                                : ''}
                        </aside>
                        <button onClick = {() => this.togglePopup(true)}>CONTINUE</button>
                    </section>
                </div> : null}
            </div>
        );
    }
}



function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default withRouter(connect(mapStateToProps, actions)(CartPage))
