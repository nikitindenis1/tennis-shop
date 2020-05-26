import React, { Component } from 'react';
import rackets_list from '../../data/rackets/rackets';
import RacketsList from './RacketsList';
import ProductsFilter from '../products-filter/ProductsFilter';
import rackets_filter_data from './filter_data/rackets_filter_data';
import { withRouter } from 'react-router-dom';
import './rackets.css'
import { queryParamsToObject, objectToQueryParams, buildFilterQuery, filterList } from '../../functions/functions';



class Rackets extends Component {
    constructor() {
        super()
        this.state = {
            rackets: [],
            all_rackets: [],
            filter_data: rackets_filter_data,
            filter: {}
        }
    }



    componentDidMount() {
        this.setState({
            all_rackets: rackets_list
        })
        let params = this.props.history.location.search.split('?')[1]
        let parsed = queryParamsToObject(params)

        this.filter(parsed, rackets_list)
        this.setState({
            filter: parsed,
            loaded: true
        })

    }

    handleFilter = (name, value) => {
        const { filter, all_rackets } = this.state
        let new_filter = { ...filter }
        let elem = Array.isArray(new_filter[name]) ? new_filter[name] : []
        if (elem.includes(value)) {
            elem = elem.filter(m => m !== value)
        } else {
            elem = [...elem, value]
        }
        new_filter[name] = elem
        this.filter(new_filter, all_rackets)
        let query_string = objectToQueryParams(new_filter)
        this.props.history.push(`${query_string}`)
        this.setState({
            filter: new_filter
        })
    }


    filter = async (new_filter, all_rackets) => {
        const query = await buildFilterQuery(new_filter)
        let new_rackets = filterList(all_rackets, query)
        this.setState({
            rackets: new_rackets
        })

    }


    render() {
        const { rackets, filter_data, filter, loaded, all_rackets } = this.state
        return (
           loaded ? <div className='rackets'>
                {/* <ProductsFilter
                    filter_data={filter_data}
                    filter={filter}
                    handleFilter={this.handleFilter}
                    list = {all_rackets}
                /> */}
                <RacketsList
                    rackets={rackets ? rackets : []}
                />
            </div> : null
        );
    }
}

export default withRouter(Rackets);
