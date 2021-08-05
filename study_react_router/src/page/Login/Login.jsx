import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { taxDeduction, userInfomation, addStorAtom } from '../../stor'
import './index'
import './login.css'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { Button } from 'antd-mobile';
import { formatDiagnostic } from 'typescript'


const zyp = addStorAtom('zyp',{key: 'userInfo',default: {}})

export default function Login (props) {
  const history = useHistory()
  const [infomation,setInfomation] = useRecoilState(userInfomation)
  const actualIncome = useRecoilValue(taxDeduction)
  const [login,setLogin] = useState(1)
  const [form,setForm] = useState({
    username: '',
    phone: null,
    password: null
  })
  const [userInfo,setUserInfo] = useRecoilState(zyp)

  useEffect(() => {
    setForm({})
  },[login])

  function salaryIncrease () {
  setInfomation({
    ...infomation,
    monthlySalary: infomation.monthlySalary + 500
  })
}
  function handleClick () {
    this.inputRef.focus();
  };
  function handleLogin() {
    history.push('/index')
    // setUserInfo(form)
    // setTimeout(() => {
    //   console.log(userInfo);
    // }, 2000);
    //
    // if(login) {
    //   //登录
    //
    // }else{
    //   //注册
    // }
  }
  function handleUserName(val) {
    setForm({
      ...form,
      username: val
    })
  }
  function handleUserPhone(val) {
    setForm({
      ...form,
      phone: val
    })
  }
  function handleUserPassword(val) {
    setForm({
      ...form,
      password: val
    })
  }
  return (
    <div className='login-bg'>
        {/* {infomation.name}-{infomation.age}-{infomation.job}-{infomation.monthlySalary}
        <button onClick={salaryIncrease}>涨薪</button>
        <div>实际收入 {actualIncome>infomation.monthlySalary?infomation.monthlySalary:actualIncome}</div> */}
        <div className='login-title'>
          {login?'欢迎登陆':'欢迎注册'}
        </div>
        <div className='login-from'>
          <WhiteSpace />
          <List>
            <InputItem placeholder="name" value={form.username} name="usename" onChange={handleUserName}>
              用户名
            </InputItem>
            {
              login? '':<InputItem type="phone" value={form.phone} placeholder="185 7423 1029" onChange={handleUserPhone}>手机号</InputItem>
            }

            <InputItem
              value={form.password}
              type="password"
              placeholder="****"
              onChange={handleUserPassword}
            >密码</InputItem>
          </List>
          <Button style={{backgroundColor: '#ccc',marginTop: '50px'}} onClick={handleLogin}>{login?'登录':'注册'}</Button>
          <div style={{display: 'flex',justifyContent: 'space-between',}}>
          <div className={['login-in', login? null : 'login-in-active'].join(' ')} onClick={() => setLogin(0)}>没有账号，立即注册</div>
          <div className={['login-in', login? 'login-in-active' : null].join(' ')} onClick={() => setLogin(1)}>已有账号，立即登录</div>
          </div>
        </div>
    </div>
  )
}
