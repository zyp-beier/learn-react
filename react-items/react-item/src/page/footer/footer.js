import React from 'react';
import './footer.css'
export default class Footer extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return <div className='footer-wrap'>
            <div className='footer'>
                <div className='footer-item-left'>
                    <div className='footer-item-left-name'>瓜瓜网站</div>
                    <div className='footer-item-left-footer'>
                        <div>
                            反馈建议
                        </div>
                        <div>
                            贡献指南
                        </div>
                        <div>
                            反馈建议
                        </div>
                    </div>
                </div>
                <div className='footer-item'>
                    <i className='el-icon-message'></i>
                </div>
            </div>
        </div>
    }
}

