import React, { Component } from 'react';

import Menu from 'react-burger-menu/lib/menus/slide';


import { NavLink } from 'react-router-dom';

export default class HamburgerMenu extends Component {
constructor(props){
    super(props)
    this.state = {
        menuOpen: false
    }
}

handleStateChange(state){
    this.setState({menuOpen: state.isOpen})
}

closeMenu(){
    this.setState({menuOpen: false})
}

toggleMenu() {
    this.setState(state => ({menuOpen: !state.menuOpen}))
}
    render() {
        
        return (
            <div>
                <Menu className='menu-wrapper' 
                isOpen={this.state.menuOpen}
                 onStateChange={(state) => this.handleStateChange(state)}
                right width={'20%'}>
                <NavLink id='home' className='menu-item' activeClassName='active' to='/' exact onClick={() => this.closeMenu()} >Home</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/rockclimb'  onClick={() => this.closeMenu()} >Climbing</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/hike'  onClick={() => this.closeMenu()} > Hiking</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/mountainBike'  onClick={() => this.closeMenu()} > Mountain Biking</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/mountaineering'  onClick={() => this.closeMenu()} > Ice Climbing</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/paddle'  onClick={() => this.closeMenu()} > Paddle Boarding</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/river'  onClick={() => this.closeMenu()} > Rafting</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/roadBike'  onClick={() => this.closeMenu()} > Road Biking</NavLink>
                <NavLink className='menu-item' activeClassName='active' to='/ski'  onClick={() => this.closeMenu()} > Skiing</NavLink>

                
            </Menu>
            </div>
        )
    }
}
