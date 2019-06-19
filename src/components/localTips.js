import React, { Component } from 'react';
import LocalComponent from './localComponent';

export default class LocalTips extends Component {
    render() {
        return (
            <div className='local-section'>
                <h1 className='local-section__header'>Tips from locals</h1>
                
                <LocalComponent />
            </div>
        )
    }
}
