import React, { Component } from 'react';
import { PLAYER_PAGE_ROUTE } from '../../../tools/routes';
import { Link } from 'react-router-dom'

class Player extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    loadImg = () => {
        this.setState({
            loaded: true
        })
    }
    render() {
        const { m } = this.props
        const {loaded} = this.state
        return (
            <li
                key={m.id}
                className='players__list__player'>
                <Link to={PLAYER_PAGE_ROUTE.replace(':player_id', m.id)}>
                    <figure>
                        <img 
                        style ={{
                            opacity:loaded ? 1  :0
                        }}
                        src={m.img} alt="" 
                        onLoad = {() => this.loadImg()}
                        />
                        <aside
                        id={loaded ? 'figure__img__loader--disabled' : ''}
                        className='figure__img__loader'></aside>
                    </figure>
                   
                </Link>
                <h4>{m.name}</h4>
            </li>
        )
    }
}

export default Player