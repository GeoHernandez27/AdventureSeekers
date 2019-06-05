import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';

export default class HamburgerMenu extends Component {
    render() {
        
        return (
            <Menu className='menu-wrapper' right width={'15%'}>
                <a id='home' className='menu-item' href='#'>Home</a>
                <a id='featuredExp' className='menu-item' href='#'>Featured Experiences</a>
                <a id='localTips' className='menu-item' href='#'>Local Tips</a>
                <a id='mediaFeature' className='menu-item' href='#'>Featured in...</a>
                
            </Menu>
        )
    }
}
