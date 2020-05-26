import React, { Component } from 'react';
import players from '../../data/players/players';
import './players.css'
import { withRouter } from 'react-router-dom';
import products_data from '../../data/data';
import Product from '../products/parts/Product';
import CartPopup from '../products/parts/CartPopup';
import BreadCrumbs from '../parts/bread-crumbs/BreadCrumbs';



class PlayerPage extends Component {
    constructor() {
        super()
        this.state = {}
    }
    updateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        const player_id = this.props.match.params.player_id
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 50);
        this.getPlayer(player_id)


    }

    getPlayer = (player_id) => {
        let player = players.filter(m => m.id === player_id)[0]
        if (player) {
            this.setState({
                player
            })
            this.getPlayerStuff(player)
        }
    }


    getPlayerStuff = (player) => {
        const products = products_data
        let player_items = []
        Object.entries(products).forEach(([key, value]) => {
            value.forEach(elem => {
                if (player.items.includes(elem.id)) {
                    player_items = [...player_items, elem]
                }
            })
        })
        this.setState({
            player_items
        })
    }
    handleCart = (product) => {
        this.setState({
            product
        })
        const body = document.querySelector('body')
        body.style.overflow = 'hidden'
    }
    hideAddProductPopup = () => {
        this.setState({
            product: ''
        })
        const body = document.querySelector('body')
        body.style.overflow = 'auto'
    }


    loadImg = () => {
        this.setState({
            img_loaded:true
        })
    }
    render() {
        const { player_items, player, product, loaded, img_loaded } = this.state
        return (
            <div
                style={{
                    opacity: loaded ? 1 : 0
                }}
                className='player__page'>
                {player ? <BreadCrumbs
                    category='players'
                    product_name={player.name}
                /> : ''}
                {product ? <CartPopup
                    updateProduct={this.updateProduct}
                    product={product}
                    hideAddProductPopup={this.hideAddProductPopup}
                /> : ''}
                <section className='player__page__info'>
                    <figure>
                        {player ? <img src={player.img} alt=""
                        onLoad = {() => this.loadImg()}
                        style ={{
                            opacity:img_loaded ? 1 : 0
                        }}
                        /> : ''}
                        <aside
                                id={img_loaded ? 'figure__img__loader--disabled'  :''}
                                className='figure__img__loader'></aside>
                    </figure>
                </section>
                <ul className='player__page__list list'>
                    {
                        player_items && player_items.length > 0 ?
                            player_items.map(m => {
                                return <Product
                                    handleCart={this.handleCart}
                                    product={m}
                                    key={m.id}
                                />
                            })
                            : ''
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(PlayerPage);
