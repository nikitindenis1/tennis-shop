import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { PRODUCT_CATEGORY_ROUTE } from '../../../tools/routes';


class CategoryElement extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    loadImg = () => {
        this.setState({
            loaded:true
        })
    }
        render() {
        const {m, category, route} = this.props
        const {loaded} = this.state
        return (
            <li
                                className='flex__center'
                            >
                                <Link to={
                                    m.category_type ? 
                                    PRODUCT_CATEGORY_ROUTE.replace(':category_type', m.category_type)
                                    :
                                    route.
                                    replace(':category_type', category)
                                    .replace(':product_type', m.value)}>
                                    <figure>
                                        <img 
                                        onLoad = {() => this.loadImg()}
                                        style ={{
                                            opacity:loaded  ?1 : 0
                                        }}
                                        src={m.img} alt="" />
                                        <aside
                                id={loaded ? 'figure__img__loader--disabled'  :''}
                                className='figure__img__loader'></aside>
                                    </figure>
                                    <aside>
                                        <h3>{m.name}</h3>
                                        <p>{m.text}</p>
                                    </aside>
                                </Link>
                            </li>
        );
    }
}

export default CategoryElement;
