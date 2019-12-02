import React from 'react'

import classes from './Logo.module.css';
import LogoIMG from '../../../assets/images/burger-logo.png';

export const Logo = () => {
    return (
        <div className={classes.container}>
            <img src={LogoIMG} alt="Burger logo"/>
        </div>
    )
}
