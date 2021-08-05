import React from 'react';

export default class Fragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 10
    }
  }

  render() {
    const {list} = this.state
    return (
      <div>
        <dl>
          {
            list.map(item => (
              <React.Fragment key={item}>
                <dt>
                  {item}
                </dt>
              </React.Fragment>
            ))
          }
        </dl>
      </div>
    )
  }
}
