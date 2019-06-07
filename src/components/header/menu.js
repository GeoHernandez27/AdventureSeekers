import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';

import { NavLink } from 'react-router-dom';

export default class HamburgerMenu extends Component {
    render() {
        
        return (
            <Menu className='menu-wrapper' right width={'15%'}>
                <NavLink id='home' className='menu-item' to='/'  >Home</NavLink>
                <NavLink id='featuredExp' className='menu-item' to='/' >Featured Experiences</NavLink>
                <NavLink id='localTips' className='menu-item' to='/'>Local Tips</NavLink>
                <NavLink id='mediaFeature' className='menu-item' to='/'>Featured in...</NavLink>
                
            </Menu>
        )
    }
}
