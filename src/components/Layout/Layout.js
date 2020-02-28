import React from 'react';
import Auxil from '../../hoc/auxil';

const layout = (props) => (
    <Auxil>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxil>
);

export default layout;