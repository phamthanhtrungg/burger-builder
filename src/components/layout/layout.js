import React, { useState } from 'react'
import { connect } from 'react-redux';

import classes from './layout.module.css';
import Wrapper from '../wrapper/wrapper';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [show, setShowState] = useState(false);
    function closeSideDrawerHandler() {
        setShowState(false);
    }
    function openSideDrawerHandler() {
        setShowState(true);
    }
    return (
        <Wrapper>
            <SideDrawer
                isAuth={props.isAuthenticated}
                show={show}
                closeSideDrawerHandler={closeSideDrawerHandler} />
            <Navbar
                isAuth={props.isAuthenticated}
                openSideDrawerHandler={openSideDrawerHandler} />
            <main className={classes.container}>
                {props.children}
            </main>
        </Wrapper>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);