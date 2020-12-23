import React, {Component} from 'react'
import './login.css'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }
    handleChange(event) {
        let key = event.target.name
        let value = event.target.value
        this.setState({
            [key]: value
        })
    }
    login() {
        // console.log(this.refs.user.value)
        // console.log(this.refs.pwd.value)
        let state = this.state
        if(state.userName!=='a' && state.password!=='b') {
            console.log('用户名或答案不正确')
        }else{
            console.log('登录成功')
        }
    }
    render() {
        return(
            <div className={'login-wrap'}>
                <div className={'login-title'}>
                    登录页面
                </div>
                <form action={''} method={'post'} className={'login-form'}>
                    <div className={'form-item'}>
                        <label htmlFor="">用户名</label>:
                        <input type="text" placeholder={'请输入用户名'} value={this.state.userName} id={'userName'} name={'userName'} onChange={this.handleChange}/>
                    </div>
                    <div className={'form-item'}>
                        <label htmlFor="">密码</label>:
                        <input type="password" placeholder={'请输入密码'} value={this.state.password} id={'password'} name={'password'} onChange={this.handleChange}/>
                    </div>
                </form>
                <div className={'login'} onClick={this.login}>登录</div>
            </div>
        )
    }
}

export default Login
