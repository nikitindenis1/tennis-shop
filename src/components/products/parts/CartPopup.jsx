import React, { Component } from 'react';
import SelectBox from '../../parts/selectbox/SelectBox';
import { connect } from 'react-redux'
import * as actions from '../../../actions/actions'
import { withRouter } from 'react-router-dom';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import StatusPopup from '../../parts/add-success/StatusPopup';


class CartPopup extends Component {
    constructor() {
        super()
        this.state = {
            added: false
        }
    }
    componentDidMount() {
        const { product } = this.props
        let state_product = JSON.parse(JSON.stringify(product))
        this.setState({
            state_product
        })
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 50);
    }

    updateProduct = (name, value) => {
        const { state_product } = this.state
        let new_product = state_product
        new_product[name] = value

        this.setState({
            state_product: new_product
        })
    }

    addProduct = (state_product) => {
        const { cart_list } = this.props.cart_reducer
        if (state_product.size && state_product.selected_size) {
            this.props.addCartProducts(state_product, cart_list)
            this.setState({
                added: true
            })
        } else {
            this.setState({
                error: true
            })
        }
        if (!state_product.size) {
            this.props.addCartProducts(state_product, cart_list)
            this.setState({
                added: true
            })
        }
    }

    updateState = (name, error) => {
        this.setState({
            [name]: error
        })
    }

    closePopup = () => {
        this.props.hideAddProductPopup()
    }

    render() {
        const { state_product, loaded, error, added } = this.state
        return (
            state_product ? <div
                id={loaded ?
                    'cart__popup--active' : ''}
                className='cart__popup'>
                <StatusPopup
                    with_overlay={false}
                    title='Product added to cart'
                    handleFunction={this.closePopup}
                    svg={<CheckCircleOutlineOutlinedIcon />}
                    button_text='CLOSE'
                    active={added}
                />
                <section className="overlay"
                    onClick={() => this.props.hideAddProductPopup()}
                >

                </section>
                <div
                    id={added ? 'cart__popup__content--blurred' : ''}
                    className='cart__popup__content flex__between'>

                    <figure><img src={state_product.img} alt="" /></figure>
                    <section
                        className='cart__popup__content__details'
                    >
                        <h3>{state_product.title}</h3>
                        <h2>{`$${state_product.price}`}</h2>
                        {state_product.size ? <SelectBox
                            property_name='selected_size'
                            value={state_product.selected_size}
                            select={this.updateProduct}
                            options={state_product.size}
                            error={error}
                            updateParentState={this.updateState}
                        /> : ''}

                        <span className='cart__popup__actions'>
                            <button

                                onClick={() => this.addProduct(state_product)}>ADD</button>
                            <button onClick={() => this.props.hideAddProductPopup()}>CLOSE</button>
                        </span>
                    </section>
                </div>
            </div> : ''
        );
    }
}


function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default withRouter(connect(mapStateToProps, actions)(CartPopup))