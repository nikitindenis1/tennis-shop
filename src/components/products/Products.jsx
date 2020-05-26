import React, { Component } from 'react';
import ProductsFilter from '../products-filter/ProductsFilter';
import { withRouter } from 'react-router-dom';
import { queryParamsToObject, objectToQueryParams, buildFilterQuery, filterList } from '../../functions/functions';
import Product from './parts/Product';
import products_filter_data from './filter_data/products_filter_data';
import { Link, animateScroll as scroll } from 'react-scroll'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import './products.css'
import CartPopup from './parts/CartPopup';
import products_data from '../../data/data';
import BreadCrumbs from '../parts/bread-crumbs/BreadCrumbs';
import ProductsFilterMobile from '../products-filter/ProductsFilterMobile';

class Products extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            full_list: [],
            filter_data: [],
            filter: {}
        }
    }



    componentDidMount() {

        this.loadData()
        window.scrollTo(0, 0)
    }



    componentWillReceiveProps(nextProps) {
        let new_type = nextProps.match.params.product_type
        let old_type = this.props.match.params.product_type
        if (new_type !== old_type) {
            this.setState({
                loaded: false,
                loaded_opacity: false,
                full_list: []
            })
            setTimeout(() => {
                this.loadData()
            }, 50);
        }
    }

    loadData = async () => {
        const type = this.props.match.params.product_type
        let full_list = products_data[type] ? products_data[type] : []
        let filter_data = products_filter_data[type] ? products_filter_data[type] : []

        this.setState({
            full_list,
            filter_data,
            filter: {},
            type
        })

        let parsed = queryParamsToObject(this.props.history.location.search.split('?')[1])
        await this.filter(parsed, full_list)
        this.setState({
            filter: parsed,
            loaded: true
        })
        setTimeout(() => {
            this.setState({
                loaded_opacity: true
            })
        }, 50);
    }




    handleFilter = (name, value) => {
        const { filter, full_list } = this.state
        let new_filter = { ...filter }
        let elem = Array.isArray(new_filter[name]) ? new_filter[name] : []
        if (elem.includes(value)) {
            elem = elem.filter(m => m !== value)
        } else {
            elem = [...elem, value]
        }
        new_filter[name] = elem
        this.filter(new_filter, full_list)
        let query_string = objectToQueryParams(new_filter)
        this.props.history.push(`${query_string}`)
        this.setState({
            filter: new_filter
        })
    }


    filter = async (new_filter, full_list) => {
        const query = await buildFilterQuery(new_filter)
        let new_list = filterList(full_list, query)
        this.setState({
            list: new_list
        })

    }

    resetFilter = () => {
        const { full_list } = this.state

        let query_string = objectToQueryParams({})
        this.props.history.push(`${query_string}`)
        this.setState({
            filter: ''
        })
        this.filter({}, full_list)
    }


    scrollToTop = () => {
        scroll.scrollToTop();
    };


    handleCart = (product) => {
        this.setState({
            product
        })
        const body = document.querySelector('body')
        body.style.overflow  ='hidden'
    }

    updateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }


    hideAddProductPopup = () => {
        this.setState({
            product: false
        })
        const body = document.querySelector('body')
        body.style.overflow  ='auto'
    }



    render() {
        const {
            list,
            filter_data,
            filter,
            loaded,
            full_list,
            loaded_opacity,
            product,
            type
        } = this.state

        return (
            loaded ? <div
                style={{ opacity: loaded_opacity ? 1 : 0 }}
                className='products'>
                {product ? <CartPopup
                    product={product}
                    hideAddProductPopup={this.hideAddProductPopup}
                /> : ''}
                <button
                    className='products__scroll__top'
                >
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true} smooth={true}
                        offset={-200}
                        duration={300}>
                        <ArrowUpwardIcon />
                    </Link>
                </button>
                <ProductsFilter
                    filter_data={filter_data}
                    filter={filter ? filter : {}}
                    handleFilter={this.handleFilter}
                    list={full_list}
                />
                <ProductsFilterMobile
                    filter_data={filter_data}
                    filter={filter ? filter : {}}
                    handleFilter={this.handleFilter}
                    list={full_list}
                    resetFilter={this.resetFilter}
                />
                <div className='products__list__wrapper list'>
                    <BreadCrumbs
                    />
                    <div className='products__list flex__center'
                        name="section1">

                        {
                            list && list.length > 0 ?
                                list.map(product => {
                                    return <Product
                                        handleCart={this.handleCart}
                                        product={product}
                                        key={product.id}
                                        type={type}
                                    />
                                }) : <h2 className='products__empty'>NO AVAILABLE PRODUCTS</h2>
                        }
                    </div>
                </div>
            </div> : ''
        );
    }
}


function mapStateToProps({ cart_reducer }) {
    return { cart_reducer }
}

export default withRouter(connect(mapStateToProps, actions)(Products))