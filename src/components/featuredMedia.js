import React, { Component } from 'react';

export default class FeaturedMedia extends Component {
    render() {
        return (
            <div>
                <h1>Featured In...</h1>
                <div className='featured-media__wrapper'>
                    <div className='featured-media__main'>Main box goes here</div>
                    <div className='featured-media__small'>Smaller box goes here</div>
                    <div className='featured-media__small'>Smaller box goes here</div>
                    <div className='featured-media__small'>Smaller box goes here</div>
                    <div className='featured-media__small'>Smaller box goes here</div>

                </div>
            </div>
        )
    }
}
