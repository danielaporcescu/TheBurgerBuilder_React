import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]]}
        onClick={props.clicked}>{props.chidren}</button>
);

export default button;