import React, { Component } from 'react';


import './selectbox.css'
class SelectBox extends Component {
    constructor() {
        super()
        this.state = {
            active: false
        }
    }
handleSelect = (m) => {
    const { property_name } = this.props
    this.props.select(property_name, m)
    this.setState({
        active:false
    })
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
    if (this.wrapperRef &&
        !this.wrapperRef.contains(event.target)) {
        this.setState({
            active: false
        })
    }
}

handleActive = () =>{
    const {active} = this.state
    this.setState({
        active:!active
    })
    this.props.updateParentState('error', false)
}



    render() {
        const { options, value, error } = this.props
        const { active } = this.state
        return (
            <div
            ref={this.setWrapperRef}
                id={active ? 'selectbox--active' : ''}
                className='selectbox'>
                <header
                id={error ? 'selectbox--error' : ''}
                    onClick={() => this.handleActive()}
                >{value ? value : 'Select size'}</header>
                <ul
                className='selectbox__options'
                >
                    {
                        options && options.length > 0 ?
                            options.map((m, i) => {
                                return <li 
                                key = {i}
                                onClick = {() => this.handleSelect(m)}>
                                    {m}
                                </li>
                            })
                            : ''
                    }
                </ul>
              { error ?<p className='selectbox__error'>Select size</p> : ''}
            </div>
        );
    }
}

export default SelectBox;
