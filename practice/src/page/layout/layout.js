import React from 'react';
import './layout.css'
import Header from "../header/header";
import Footer from "../footer/footer";
import {Layout} from 'element-react'
import Slide from "../slide/slide";
import Main from "../main/main";

export default class Index extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className='header-page'>
                    <Header />
                </div>
                <div className='content'>
                    <Layout.Row gutter="20">
                        <Layout.Col span="6" className='slide-left'>
                            <Slide />
                        </Layout.Col>
                        <Layout.Col span="14">
                            <Main />
                        </Layout.Col>
                    </Layout.Row>
                </div>
                <div className='footer-page'>
                    <Footer />
                </div>
            </div>
        )
    }

}
