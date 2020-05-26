import React, { Component } from 'react';
import './products-filter.css'
import ProductFilterSection from './ProductFilterSection';
import AddIcon from '@material-ui/icons/Add';


class ProductsFilterMobile extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    toggle = (val) => {
      
        this.setState({
            active: val
        })
        const body = document.querySelector('body')
        body.style.overflow = val ? 'hidden'  :'auto'
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
        const { active } = this.state
        if (this.wrapperRef &&
            !this.wrapperRef.contains(event.target) && active) {
                this.toggle(false)
        }
    }

    reset = () => {
        this.props.resetFilter()
        this.toggle(false)
    }

    render() {

        const { filter_data, filter, list } = this.props
        const { active } = this.state
        return (
            <div
            ref={this.setWrapperRef}
                id='products__filter--mobile'
            >
                <header>
                    <button
                    className='flex__center'
                        onClick={() => this.toggle(!active)}
                    >
                        REFINE
                        <AddIcon /></button>
                </header>
                <div
                    id={active ? 'products__filter--active' : ''}
                    className='products__filter'>
                    {
                        filter_data && filter_data.length > 0 ?
                            filter_data.map((m, i) => {
                                return <ProductFilterSection
                                    m={m}
                                    list={list}
                                    key={i}
                                    filter={filter}
                                    handleFilter={this.props.handleFilter}
                                />
                            })
                            : ''
                    }
                  
                </div>
                <aside 
                id ={active ? 'products__filter__actions--active' : ''}
                className='products__filter__actions flex__column'>
                <button onClick = {() => this.toggle(false)}>REFINE</button>
                <button onClick = {() => this.reset()}>CLEAR ALL</button>
                </aside>
            </div>
        );
    }
}

export default ProductsFilterMobile;
