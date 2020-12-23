import styled from 'styled-components'
import BgImg from '../../assets/4.jpg'


const ButtonA = styled.button`
  color: ${prop => prop.color? prop.color: 'blue'};
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline:none;
  border: none;
  background: url(${BgImg});
  background-size: 100% 100%;
`

const ButtonB = styled(ButtonA)`
  color: pink;
`

const BackgroundImg = styled.div`
  width: 200px;
  height: 100px;
  background: url(${BgImg});
  background-size: 100% 100%;
`
const Input = styled.input.attrs(prop => ({
  placeholder: '请输入信息',
  type: 'text'
}))`
  width: ${prop => prop.width? prop.width: '200px'};
  height: ${prop => prop.height? prop.height:'100px'};
  font-size: 14px;
  text-indent: 10px;
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;

  ::placeholder {
    color: palevioletred;
  }
`

export {
  ButtonA,
  ButtonB,
  BackgroundImg,
  Input
}