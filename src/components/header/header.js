import React, { Component } from 'react';
import HamburgerMenu from './menu';
import Weather from './weatherIcon';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='main-logo'>Logo</div>
                <HamburgerMenu/>
                <Weather />
            </div>
        )
    }
}
