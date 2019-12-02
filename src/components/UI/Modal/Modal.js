import React from 'react'
import PropTypes from 'prop-types';

import classes from './Modal.module.css';
import Wrapper from '../../wrapper/wrapper';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
    return (
        <Wrapper>
            <Backdrop show={props.show} click={props.toggleOffOrderModalHandler} />
            <div className={classes.container}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Wrapper>
    )
}
Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    toggleOffOrderModalHandler: PropTypes.func.isRequired
}

export default Modal
