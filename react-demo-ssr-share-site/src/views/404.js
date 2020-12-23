import '../style/404.css'

import React from "react";

import {Link} from 'react-router-dom'
import {info} from "../utils/utils";

export default class NotFound extends React.Component {
    constructor() {
        super();
        info('init')
    }

    render() {
        return (
            <div className='content'>
                <h1 className='title'>404</h1>
                <div>
                    <span className='tips'>You must be lost something, we could find it together</span>
                </div>
                <div className='links-wrap'>
                    <Link to='/'>
                        <span className='link'>Back Index</span>
                    </Link>
                    {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                    <a href='javascript:history.go(-1)'>
                        <span className='link'>Back last page</span>
                    </a>
                </div>
            </div>
        )
    }
}
