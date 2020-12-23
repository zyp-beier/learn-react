import React from 'react'

import '../../style/header/header.css';
import {log} from "../../utils/utils";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        log("header", "init");

        this.logo_src = 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Shadowsocks_logo.png';
    }

    render() {
        return (
            <header className='header'>
                <div className='header-wrap'>
                    <div className='brand-wrap'>
                        <Link to='/' className='logo-box'>
                            <img src={this.logo_src} className='logo-img' alt=""/>
                        </Link>
                        <span className='brand-text'>SSR Share</span>
                    </div>

                    <div className='nav-links-wrap'>
                        <Link to="/">
                            <span className='link'>首页</span>
                        </Link>
                        <Link to='/about'>
                            <span className='link'>关于我们</span>
                        </Link>
                    </div>
                </div>

            </header>
        );
    }
}
