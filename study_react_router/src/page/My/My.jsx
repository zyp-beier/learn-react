import React,{useState} from 'react'
import { useRecoilValue } from 'recoil'
import { useRecoilState } from 'recoil'
import { taxDeduction, userInfomation } from '../../stor'
import Header from '../laout/Header/Header'
import Tab from '../laout/Tab/Tab'
import { List, InputItem, WhiteSpace } from 'antd-mobile';

export default function My() {
  const [infomation,setInfomation] = useRecoilState(userInfomation)
  const actualIncome = useRecoilValue(taxDeduction)
const [form,setForm] = useState({
  username: '',
  phone: null,
  password: null
})
  function salaryIncrease() {
    setInfomation({
      ...infomation,
      monthlySalary: infomation.monthlySalary + 1000
    })
  }
  return <div>
    <Header></Header>
    <div style={{marginBottom: '80px',marginTop: '45px'}}>
      <div>
        姓名:{infomation.name}
      </div>
      <div>
        年龄:{infomation.age}
      </div>
      <div>
        工作:{infomation.job}
      </div>
      <div>
        薪资:{infomation.monthlySalary}
        <button onClick={salaryIncrease}>涨薪吧</button>
      </div>
      <List>
            <InputItem placeholder="name">
              用户名
            </InputItem>
            <InputItem type="phone" placeholder="185 7423 1029">手机号</InputItem>
            
            <InputItem
              type="password"
              placeholder="****"
            >密码</InputItem>
          </List>
    </div>
    <Tab></Tab>
  </div>
}
