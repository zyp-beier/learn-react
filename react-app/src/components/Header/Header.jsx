import React, { Component } from 'react'
import {HeaderWrap} from './StyledHeader'

export default class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrap>
                    <div className='header'>
                            首页
                    </div>
                </HeaderWrap>
            </div>
        )
    }
}
