import React from 'react'
import Header from '../laout/Header/Header'
import Tab from '../laout/Tab/Tab'
import ProductionList from '../ProductionList/ProductionList'

export default function Production() {
  return <div>
    <Header></Header>
    <div style={{marginBottom: '80px',marginTop: '45px'}}>
      <ProductionList></ProductionList>
    </div>
    <Tab></Tab>
  </div>
}