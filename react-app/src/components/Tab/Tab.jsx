import React from 'react'
import { TabBar } from 'antd-mobile';
import commonProblem from 'assets/commonProblem.png'
import contactTeacher from 'assets/contactTeacher.png'
import pushSettings from 'assets/pushSettings.png'
import Index from '../../page/Index/Index'
import Purchased from '../../page/Purchased/Purchased.jsx'
import My from '../../page/My/My'
import './Tab.css'

import {createStore} from 'redux'

const store = createStore(reducer)

function reducer( state = {
  selectedTab: 'index'
},action) {
  return state
}
export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

  render() {
    return (
        <div style={{ position: 'fixed', bottom: 0 ,width: '100%'}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${commonProblem}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${contactTeacher}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === '/'}
            onPress={() => {
              this.setState({
                selectedTab: '/',
              });
            }}
            data-seed="logId"
          >
            <Index></Index>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${pushSettings}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="已购"
            key="Koubei"
            selected={this.state.selectedTab === '/purchased'}
            onPress={() => {
              this.setState({
                selectedTab: '/purchased',
              });
            }}
            data-seed="logId1"
            
          >
            <Purchased></Purchased>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="我的"
            key="Friend"
            selected={this.state.selectedTab === '/my'}
            onPress={() => {
              this.setState({
                selectedTab: '/my',
              });
            }}
          >
            <My></My>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
