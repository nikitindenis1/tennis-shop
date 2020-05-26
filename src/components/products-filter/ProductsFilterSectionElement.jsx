import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { buildFilterQuery, filterList } from '../../functions/functions';


class ProductsFilterSectionElement extends Component {
    constructor(){
        super()
        this.state = {
            amount:0
        }
    }

    componentDidMount(){
            const {filter, m, list,elem} = this.props
            let amount  = 0
            list.forEach(list_element => {
                    if(Array.isArray( list_element[m.value])){
                        list_element[m.value].forEach(val =>{
                            if(val === elem.value){
                                amount ++
                            }
                        })
                    }else{
                        if( list_element[m.value] === elem.value){
                            amount ++
                        }
                    }
            
            })
            this.setState({
                active:filter[m.value],
                amount
            })
     
    }


    render() {
        const { elem, filter, m} = this.props
        const {amount} = this.state
        return (
            <li
            >
                <figure>
                    <Checkbox
                        checked={filter[m.value] && filter[m.value].includes(elem.value)}
                        onChange={() => this.props.handleFilter(m.value, elem.value)}
                    />
                </figure>
                <h4>{elem.name}</h4>
        <h5>[{amount}]</h5>
            </li>
        );
    }
}

export default ProductsFilterSectionElement;
