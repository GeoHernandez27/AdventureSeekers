import React, { Component } from 'react';
import LocalComponent from './localComponent';

export default class LocalTips extends Component {
    render() {
        return (
            <div className='local-section'>
                <h1>Tips from locals</h1>
                <LocalComponent />
            </div>
        )
    }
}
