import React, { useState } from 'react'

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
            <SideDrawer show={show} closeSideDrawerHandler={closeSideDrawerHandler} />
            <Navbar openSideDrawerHandler={openSideDrawerHandler} />
            <main className={classes.container}>
                {props.children}
            </main>
        </Wrapper>
    )
}
export default Layout;