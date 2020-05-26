import React, { Component } from 'react';
import './products-filter.css'
import ProductFilterSection from './ProductFilterSection';



class ProductsFilter extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render() {
       
        const { filter_data, filter, list } = this.props
        return (
            <div
            id='products__filter--desktop'
            className='products__filter'>
                {
                    filter_data && filter_data.length > 0 ?
                        filter_data.map((m, i) => {
                            return <ProductFilterSection
                                m={m}
                                list = {list}
                                key={i}
                                filter={filter}
                                handleFilter={this.props.handleFilter}
                            />
                        })
                        : ''
                }
            </div>
        );
    }
}

export default ProductsFilter;
