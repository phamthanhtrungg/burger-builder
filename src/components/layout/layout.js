import React from 'react'

import classes from './layout.module.css';
import Wrapper from '../wrapper/wrapper';
import Navbar from '../Navbar/Navbar';

export default function layout(props) {
    return (
        <Wrapper>
            <Navbar />
            <main className={classes.container}>
                {props.children}
            </main>
        </Wrapper>
    )
}
