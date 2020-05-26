import React, { Component } from 'react';
import players from '../../data/players/players';

import {Link} from 'react-router-dom'
import './players.css'
import { PLAYER_PAGE_ROUTE } from '../../tools/routes';
import BreadCrumbs from '../parts/bread-crumbs/BreadCrumbs';
import Player from './parts/Player';
class Players extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    componentDidMount() {
        this.setState({
            players
        })
        setTimeout(() => {
            this.setState({
                loaded:true
            })
        }, 50);
    }
    render() {
        const { players,  loaded } = this.state
        return (
            <div
            style ={{
                opacity:loaded ? 1  :0
            }}
            className='players'>
                <div className='players__flex'>
                    <BreadCrumbs
                    category = 'players'
                    />
                <ul className='players__list flex__center'>
                    {
                        players && players.length > 0 ?
                            players.map((m, i) => {
                                return <Player
                                key = {i}
                                m  ={m}
                                />
                            })
                            : ""
                    }
                </ul>
                </div>
            </div>
        );
    }
}

export default Players;
