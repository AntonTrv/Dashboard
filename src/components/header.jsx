import React from 'react';
import './css/header.scss';

const Header = ({handleClick}) => {
    return(
    <header>
        <div className='menu' onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div></div>
        <div className='logo'><h1>Dash</h1></div>
    </header>
    )
}

export default Header;
