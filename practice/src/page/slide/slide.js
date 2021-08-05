import React from 'react';
import {Menu} from 'element-react'
import {Link} from "react-router-dom";


export default class Slide extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <div>
            <Menu defaultActive="/" className="el-menu-vertical-demo">
                <Menu.ItemGroup title="分组一">
                    <Link to='/'><Menu.Item index="1"> <i className="el-icon-message" />组件复用</Menu.Item></Link>
                    <Link to='/two'> <Menu.Item index="2"><i className="el-icon-message" />生命周期</Menu.Item></Link>
                    <Link to='/three'><Menu.Item index="3"><i className="el-icon-message" />事件处理</Menu.Item></Link>
                    <Link to='/four'><Menu.Item index="4"><i className="el-icon-message" />条件渲染</Menu.Item></Link>
                    <Link to='/five'><Menu.Item index="5"><i className="el-icon-message" />列表渲染</Menu.Item></Link>
                    <Link to='/six'><Menu.Item index="6"><i className="el-icon-message" />表单</Menu.Item></Link>
                    <Link to='/seven'><Menu.Item index="7"><i className="el-icon-message" />状态提升（子传父）</Menu.Item></Link>
                    <Link to='/eight'><Menu.Item index="8"><i className="el-icon-message" />组合vs继承</Menu.Item></Link>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="分组二">
                    <Link to='/codeSegmentation'><Menu.Item index="codeSegmentation"><i className="el-icon-message" />代码分割</Menu.Item></Link>
                    <Link to='/Context'><Menu.Item index='context'><i className="el-icon-message" />Context</Menu.Item></Link>
                    <Link to='/nine'><Menu.Item index="10"><i className="el-icon-message" />hook</Menu.Item></Link>
                </Menu.ItemGroup>
            </Menu>
        </div>
    }
}
