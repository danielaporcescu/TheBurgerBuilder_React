import React from 'react';

import Auxil from '../../hoc/Auxil';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxil>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxil>
);

export default layout;