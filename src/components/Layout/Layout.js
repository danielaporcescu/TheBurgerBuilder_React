import React from 'react';

import Auxil from '../../hoc/Auxil';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxil>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxil>
);

export default layout;