import React, {useState, useContext, Children} from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Hr from '../Hr/Hr'
import Counter from '../../components/Counter/Counter'
import Header from '../laout/Header/Header'
import Tab from '../laout/Tab/Tab'
import {NavLink, Route, Link, useRouteMatch, Switch, Redirect, useParams} from 'react-router-dom'

const SlotMachinev  = React.createContext()

export default function Index (props) {
  const match = useRouteMatch()
  const [msg,setMsg]  = useState('点击抽奖')
  const [value,setValue] = useState(() => {
    const init = handleValue(props)
    return init
  })
  const [swit,setSwit] = useState(2)

  function clickButton() {
    setSwit(Math.round(Math.random()*2))
    setMsg('再抽一次')
  }
  function handleValue(props){
    return parseInt(props.number) + 1
  }
  return <div>
    <Header></Header>
    <div style={{marginTop: '45px'}}>
      <div>
          <SlotMachinev.Provider value={{swit: swit}} >
              <div className='box-wrap'>
                <div className='box-item'>
                  <Box1 ></Box1>
                </div>
                <div className='box-item'>
                  <Box1 ></Box1>
                </div>
                <div className='box-item'>
                  <Box1 ></Box1>
                </div>
              </div>
            </SlotMachinev.Provider>
          <button onClick={clickButton} className='lottery'>{msg}</button>
      </div>
      <div>
        <Hr title='计数器'></Hr>
      </div>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <Hr title='子路由'></Hr>
      </div>
      <div>
        <Link to={`${match.url}`}>路由1</Link>
        <Link to={`${match.url}/2`}>路由2</Link>
        <Link to={`${match.url}/3`}>路由3</Link>
      </div>
      <div>
        <Switch>
          <Redirect exact from={`${match.url}`} to={`${match.url}`}></Redirect>
          <Route path={`${match.url}/:id`}>
            <Child></Child>
         </Route>
        </Switch>
      </div>
    </div>
    <Tab></Tab>
  </div>
}

function Box1(props) {
  const {swit} = useContext(SlotMachinev)
  return (
    <div>
      <div> 
        {swit? Math.round(Math.random()*swit) : '0'}
      </div>
  </div>
  )
}

function Child() {
  const params = useParams()
  const {id} = params
return <div>{id}</div>
}

Index.defaultProps = {
  number: 1
}