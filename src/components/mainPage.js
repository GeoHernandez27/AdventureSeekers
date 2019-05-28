import React, { Component } from 'react';
import Header from './header/header';
import Experiences from './featuredExperience';
import LocalTips from './localTips';
import FeaturedMedia from './featuredMedia';
import LandingPage from './landingPage';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                {/* TO DO */}
                <Header />
                <LandingPage />
                
                <Experiences />
                <LocalTips />
                <FeaturedMedia />

                
            </div>
        )
    }
}
