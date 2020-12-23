import React from 'react';
import {Menu} from 'element-react'
import {Link, NavLink} from "react-router-dom";


export default class Slide extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleGet(e) {
        // console.log(e)
        // this.props.handleGet(e)
    }
    render() {
        return <div>
            <Menu defaultActive="/" className="el-menu-vertical-demo" onSelect={this.handleGet.bind(this)}>
                <Menu.ItemGroup title="分组一">
                    <Link to='/'><Menu.Item index="1"> <i className="el-icon-message"></i>导航一</Menu.Item></Link>
                    <Link to='/two'> <Menu.Item index="2"><i className="el-icon-message"></i>导航二</Menu.Item></Link>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="分组二">
                    <NavLink to='/three'><Menu.Item index="3"><i className="el-icon-message"></i>导航三</Menu.Item></NavLink>
                    <Link to='/four'><Menu.Item index="4"><i className="el-icon-message"></i>导航四</Menu.Item></Link>
                </Menu.ItemGroup>
            </Menu>
        </div>
    }
}
