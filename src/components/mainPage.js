import React, { Component } from 'react';



import Experiences from './featuredExperience';
import LocalTips from './localTips';
import FeaturedMedia from './featuredMedia';
import LandingPage from './landingPage/landingPage';

import HamburgerMenu from './header/menu';

export default class MainPage extends Component {
    render() {
        return (
            <div className='main-page__container'>
                {/* TO DO */}
                <LandingPage />
                
                {/* <HamburgerMenu className='hamburger-menu__wrapper'/> */}
          
                
                
                <Experiences />
                <LocalTips />
                <FeaturedMedia /> 

                
            </div>
        )
    }
}
