import React from 'react';
import './header.css';
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className='header-wrap'>
            <div className='header'>
                <div className='header-icon'>
                    <i className="el-icon-menu" />
                </div>
                <div className='header-menu'>
                    <div className='header-menu-item'>指南</div>
                    <div className='header-menu-item'>组件</div>
                    <div className='header-menu-item'>资源</div>
                    <div className='header-menu-item'>中文/En</div>
                </div>
            </div>
        </div>
    }
}
