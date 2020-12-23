import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react'
import spring from 'assets/1.jpg'
import summer from 'assets/2.jpg'
import fall from 'assets/3.jpg'
import winter from 'assets/4.jpg'
import './Index.css'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [spring, summer, fall, winter]
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [spring, summer, fall, winter],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <WingBlank style={{padding: 0,margin: 0}}>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={5}
          slideWidth={.8}
          autoplay
          infinite
          dots={false}
        >
          {this.state.data.map((val, index) => (
            <a key={val}
            href="http://www.alipay.com"
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%'}}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}
