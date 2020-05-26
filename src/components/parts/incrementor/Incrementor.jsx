import React, { Component } from 'react';
import './incrementor.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class Incrementor extends Component {


    handleChange = (add) => {
        const { value, property_name } = this.props
        let new_value = value
        if (add) {
            new_value++
        } else {
            if (new_value > 1) {
                new_value--
            }
        }
        this.props.updateParent(property_name, new_value)
    }
    render() {
        const { value } = this.props
        return (
            <div className='incrementor flex__center'>
                <button
                className='flex__center'
                    onClick={() => this.handleChange()}
                ><RemoveIcon /></button>
              <h4 className='flex__center'>{value ? value : 0}</h4>
                <button
                className='flex__center'
                    onClick={() => this.handleChange(true)}
                ><AddIcon /></button>
            </div>
        );
    }
}

export default Incrementor;
