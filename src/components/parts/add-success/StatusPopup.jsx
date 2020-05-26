import React from 'react';
import './status-popup.css'
const StatusPopup = (props) => {
    const { with_overlay, title, svg, button_text, active } = props
    return (
        <div
            id={active ? 'status__popup--active' : ''}
            className='status__popup'>
            {with_overlay ? <aside
            onClick = {() => props.handleFunction()}
            className='overlay'></aside> : ''}
            <section className='status__popup__content flex__column'>
                {svg}
                {Array.isArray(title) ? 
                title.map(m => {
                    return <h2>{m}</h2>
                    
                }) :   <h2>{title}</h2>}
               
                <button
                    onClick={() => props.handleFunction()}
                >{button_text}</button>
            </section>
        </div>
    )
}
export default StatusPopup