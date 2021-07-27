import React from 'react';

import "./button.styles.css"

const Button = props =>(
    <button disabled={props.disabled} className="btn" onClick={props.action}>{props.text}</button>
)

export default Button;