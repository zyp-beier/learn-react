import React, { useState, useEffect} from 'react'
import { useHistory, useLocation } from "react-router-dom";
import './tab.css'
import hawaii from '../../../assets/TabIcon/hawaii.png'
import hawaiiSelected from '../../../assets/TabIcon/hawaii-selected.png'
import mango from '../../../assets/TabIcon/mango.png'
import mangoSelected from '../../../assets/TabIcon/mango-selected.png'
import pineapple from '../../../assets/TabIcon/pineapple.png'
import pineappleSelected from '../../../assets/TabIcon/pineapple-selected.png'

export default function Tab () {
  const history = useHistory();
  const tabs = [
    {
      title: '首页',
      key: 'index',
      iconUrl: hawaii,
      selectedIconUrl: hawaiiSelected
    },
    {
      title: '商品',
      key: 'product',
      iconUrl: mango,
      selectedIconUrl: mangoSelected
    },
    {
      title: '我的',
      key: 'my',
      iconUrl: pineapple,
      selectedIconUrl: pineappleSelected
    }
  ]
  const [selectedTab,setSelectedTab] = useState('index')
  const [tabList,setTabList] = useState(tabs)
  const loaction = useLocation()
  useEffect(() => {
    const pathname = loaction.pathname
    let pathnameStr = pathname.substring(1)
    let selectedTab = pathnameStr.indexOf('/')
    if(selectedTab === -1) {
      selectedTab = pathnameStr
    }else{
      selectedTab = pathnameStr.substring(0,selectedTab)
    }
    setSelectedTab(selectedTab)
  }, )

  function changeTab(key) {  
    history.push(`/${key}`)
  }

    return (
      <div className='TabWrap'>
        {
          tabList.map(tab => {
            const {key} = tab
            return <div key={key} style={{flex: 1,textAlign:"center"}} onClick={() => changeTab(key)}>
              <div>
                {selectedTab===tab.key? <img src={tab.selectedIconUrl} />:<img src={tab.iconUrl} alt=""/>}
              </div>
              <div className='tab-title'>
                {tab.title}
              </div>
            </div>
          })
        }
      </div>
    );
}