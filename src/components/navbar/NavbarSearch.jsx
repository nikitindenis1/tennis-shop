import React, { Component } from 'react';
import products_data from '../../data/data';
import { withRouter } from 'react-router-dom';
import { PRODUCT_PAGE_ROUTE, CATEGORY_PRODUCTS_PRODUCT } from '../../tools/routes';


const checkifHaveResult = (arr) =>{
let num = false
    if(arr && arr.length > 0){
        num =  arr.reduce((total, amount) => total + amount) 
    }
    return num > 0 ? true : false
}

const Titles = {
    'rackets': 'RACKETS',
    'bags': 'BAGS',
    'grips': 'GRIPS',
    'shoes': 'SHOES',
    'dampeners':'DAMPENERS',
    'strings':'STRINGS',
    'bands':'BANDS'
}

class NavbarSearch extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleSearch = (filter_value) => {
        let results = {}
        let has_value = []
        this.setState({
            filter_value
        })
        if (filter_value) {
            Object.entries(products_data).forEach(([key, value]) => {
                let new_value = value.filter(m => m.title ? m.title.toLowerCase().indexOf(filter_value.toLowerCase()) > -1 : '')
                results[key] = new_value
                has_value = [...has_value,new_value.length ]
            })
          
           
        } else {
            Object.entries(products_data).forEach(([key, value]) => {
                results[key] = []
            })
        }
        this.setState({
            results,
            has_value
        })
    }

    toggleActive = (val) => {
        const body = document.querySelector('body')
        if (val) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
            this.setState({
                has_value:''
            })
        }
        this.setState({
            active: val
        })
    }

    submitSearch = (product) => {
        this.toggleActive(false)
       if(product.category_type){
        this.props.history.push(
            CATEGORY_PRODUCTS_PRODUCT
            .replace(':category_type', product.category_type)
            .replace(':product_type', product.type)
            .replace(':product_id', product.id)
            )
       }else{
        this.props.history.push (
        PRODUCT_PAGE_ROUTE
        .replace(':product_type', product.type)
        .replace(':product_id', product.id)
        )
       }
       
        this.setState({
            filter_value:''
        })
    }
    render() {
        const { results, active, has_value, filter_value } = this.state
       
        return (
            <div
                id={active ? 'navbar__search--active' : ''}
                className='navbar__search'>
                <section className="overlay"
                    onClick={() => this.toggleActive(false)}
                ></section>
                <section className='navbar__search__content'>
                    <input type="text"
                    value = {filter_value}
                        placeholder='Seach Product...'
                        onFocus={() => this.toggleActive(true)}
                        onChange={(e) => this.handleSearch(e.target.value)}
                    />
                    <div
                        id={checkifHaveResult(has_value) && active ? 'results--active' : ''}
                        className='navbar__search__results__list'>
                        {

                            results ?
                                Object.entries(results).map(([key, value]) => {
                                    return value && value.length > 0 ? <section
                                        className='navbar__search__result'
                                    >
                                        <header className='flex__center'>{Titles[key]}</header>
                                        <ul>
                                            {
                                                value.map(m => {
                                                    return <li
                                                        onClick={() => this.submitSearch(m)}
                                                    >{m.title}</li>
                                                })
                                            }
                                        </ul>
                                    </section> : ''
                                })
                                : ''
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(NavbarSearch);
