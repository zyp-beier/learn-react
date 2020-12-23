import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'

export default class Header extends Component {
  render() {
    return (
      <div style={{position: 'fixed',top: 0,width: '100%',zIndex: '1'}}>
        <NavBar
          icon={<Icon type='left' />}
          onLeftClick= { () => console.log('onLifeClick')}
          rightContent={[
            <Icon key= "0" type='search' style={{marginRight: '16px'}}/>,
            <Icon key= "1" type="ellipsis"/>
          ]}
        >
          我的应用
        </NavBar>
      </div>
    )
  }
}
