import React, { Component } from 'react';

import classes from './Modal.module.css';
import Auxil from '../../../hoc/Auxi/Auxil';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    //This could be a functional component, doesn't need to be a class
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <Auxil>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxil>
        );
    }
}

export default Modal;