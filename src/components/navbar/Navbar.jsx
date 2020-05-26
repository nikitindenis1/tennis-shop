import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './navbar.css'
import navigations from './navigations';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import NavbarSearch from './NavbarSearch';
import {HOME_ROUTE} from '../../tools/routes'
import bagImg from '../../images/black-bag.png'
import WhiteBagImg from '../../images/white-bag.png'

class Navbar extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    showCart = () => {
        const { show_cart } = this.props.cart_reducer
        this.props.setDataToCartReducer('show_cart', !show_cart)
        
        const body = document.querySelector('body')
        body.style.overflow = !show_cart ? 'hidden'  :'auto'
       
      
    }

    toggleMobileMenu = (val) => {
        this.setState({
            active_mobile:val
        })
        const body = document.querySelector('body')
        body.style.overflow = val ? 'hidden' : ''
    }

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
        const {active_mobile} = this.state
        if (this.wrapperRef &&
            !this.wrapperRef.contains(event.target) && active_mobile) {
                this.toggleMobileMenu(false)
        }
    }

    render() {
        const { cart_list } = this.props.cart_reducer
            const {active_mobile} = this.state
        return (
            <nav className='navbar flex__center'>
                <div className='navbar__flex'>
                    <section className='navbar__top flex__between'>
                        <button
                        onClick = {() => this.toggleMobileMenu(true)}
                        className='mobile__hamburger'>
                            <aside></aside>
                            <aside></aside>
                            <aside></aside>
                        </button>
                        <Link 
                        className='navbar__logo'
                        to ={HOME_ROUTE}>
                        My Shop
                        </Link>
                    <NavbarSearch />
                        <aside
                            onClick={() => this.showCart()}
                            className='navbar__cart navbar__cart__element flex__center'>
                            <h4 className='navbar__cart__element'> {cart_list.length}</h4>
                           <img src={bagImg}
                           className='navbar__cart__element'
                            id='navbar__cart__desktop__img'/>
                           <img src={WhiteBagImg} 
                           className='navbar__cart__element'
                           id='navbar__cart__mobile__img'/>
                        </aside>
                    </section>
                    <section 
                      ref={this.setWrapperRef}
                    id={active_mobile ? 'navbar__navigations--active' : ''}
                    className='navbar__navigations'>
                          <button
                        onClick = {() => this.toggleMobileMenu(false)}
                        className='mobile__hamburger'>
                            <aside></aside>
                            <aside></aside>
                            <aside></aside>
                        </button>
                        <ul className='flex__center'>
                            {
                                navigations.map((m, i)=> {
                                    return <li
                                    key = {i}
                                    >
                                        <Link 
                                        onClick = {() => this.toggleMobileMenu(false)}
                                        to={m.url}>
                                            {m.name}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                    </section>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default withRouter(connect(mapStateToProps, actions)(Navbar))
