import React from 'react'
import PropTypes from 'prop-types'

import classes from './SideDrawer.module.css'
import { Logo } from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../wrapper/wrapper';

const SideDrawer = props => {
    let classNameSideDrawer = [classes.container, classes.close].join(' ');
    if (props.show)
        classNameSideDrawer = [classes.container, classes.open].join(' ');
    return (
        <Wrapper>
            <Backdrop show={props.show} click={props.closeSideDrawerHandler} />
            <div className={classNameSideDrawer}>

                <div style={{ height: '15%' }}>
                    <Logo />
                </div>
                <NavItems />
            </div>
        </Wrapper>
    )
}

SideDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    closeSideDrawerHandler: PropTypes.func.isRequired
}

export default SideDrawer
