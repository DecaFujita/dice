import React from 'react';

import './die.styles.css';

const Die = props => {
    let icon = `fas fa-dice-${props.num} game-die ${
        props.rolling ? "rolling" : ""
    }`;
    return (
        <div className="die">
        <i className={icon}/>
    </div>
    )
}

export default Die;