import React, {useState,useContent} from 'react'
import Login from './page/Login/Login.jsx'
import Index from './page/Index/Index'
import Production from './page/Production/Production';
import My from './page/My/My';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import ProductDetail from './page/ProductDetial/ProductDetial'

function App() {
  const loaction = useLocation()
  const pathName = loaction.pathname
  const [selectedTab,setSelectedTab] = useState(0)
  function handleSelected(tab) {
      setSelectedTab(tab)
  }
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={Login}></Route>
        <Route  path='/index' component={Index}></Route>
        <Route  path='/product' component={Production}></Route>
        <Route  path='/my' component={My}></Route>
        <Route  path='/productDetail/:id' component={ProductDetail}></Route>
      </Switch>
  </div>
  );
}

export default App;