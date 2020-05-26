import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { filterList, buildFilterQuery } from '../../functions/functions';
import ProductsFilterSectionElement from './ProductsFilterSectionElement';


class ProductFilterSection extends Component {
    constructor() {
        super()
        this.state = {
            amount: []
        }
    }

    componentDidMount() {
        const { filter, m } = this.props
        this.setState({
            active: filter[m.value]
        })


    }




    render() {
        const { filter, m } = this.props
        const { active } = this.state
        return (
            <section
                id={active ? 'products__filter__section--active' : ''}
                className='products__filter__section'>
                <header
                    className='flex__between'
                    onClick={() => this.setState({
                        active: !active
                    })}
                ><h4>{m.title}</h4><ChevronRightIcon /></header>
                <ul

                >
                    {
                        m.options.map((elem, i) => {
                            return <li
                            key = {i}
                                id={filter[m.value] && filter[m.value].includes(elem.value) ? 'selected' : ''}
                            >
                                <figure>
                                    <Checkbox
                                        checked={filter[m.value] && filter[m.value].includes(elem.value) ? true  :false}
                                        onChange={() => this.props.handleFilter(m.value, elem.value)}
                                    />
                                </figure>
                                <h4>{elem.name}</h4>
                            </li>
                        })
                    }

                </ul>
            </section>
        );
    }
}

export default ProductFilterSection;
