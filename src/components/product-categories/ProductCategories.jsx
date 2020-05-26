import React, { Component } from 'react';
import './product-categories.css'
import { Link, withRouter } from 'react-router-dom'
import categories from '../../data/categories';
import BreadCrumbs from '../parts/bread-crumbs/BreadCrumbs';
import { PRODUCT_CATEGORY_ROUTE } from '../../../src/tools/routes';
import CategoryElement from './parts/CategoryElement';

class ProductCategories extends Component {
    constructor() {
        super()
        this.state = {
            categories_list: []
        }
    }

    componentDidMount() {
        const category = this.props.match.params.category_type
      
        this.GetCategory(category)
       
    }
    componentWillReceiveProps(nextProps) {
        const { category } = this.state
        let new_category = nextProps.match.params.category_type

        if (new_category !== category) {
            this.GetCategory(new_category)
        }
    }


    GetCategory = (category) => {
        window.scrollTo(0,0)
        this.setState({
            loaded: false
        })
        setTimeout(() => {
            if (categories[category]) {
                this.setState({
                    categories_list: categories[category].list,
                    category,
                    route: categories[category].url,
                    class_name: categories[category].class,

                })
            }
        }, 150);
        setTimeout(() => {
            this.setState({
                loaded: true
            }) 
        }, 250);

    }

    render() {
        const { categories_list, category, route, class_name, loaded } = this.state
        return (
            <div
                style={{
                    opacity: loaded ? 1 : 0
                }}
                className={`product__categories ${class_name}`}>
                   
                <ul

                    id='product__category__types'
                >
                    {loaded ? <BreadCrumbs
                    /> : ''}
                    {
                        categories_list.map(m => {
                            return <CategoryElement
                            m = {m}
                            category = {category}
                            route = {route}
                            />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(ProductCategories);
