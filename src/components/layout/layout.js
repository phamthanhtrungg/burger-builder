import React from 'react'
import classes from './layout.module.css';
import Wrapper from '../wrapper/wrapper';

export default function layout(props) {
    return (
        <Wrapper>
            <div>nav bar ,side bar, logo</div>
            <main className={classes.container}>
               {props.children}
            </main>
        </Wrapper>
    )
}
