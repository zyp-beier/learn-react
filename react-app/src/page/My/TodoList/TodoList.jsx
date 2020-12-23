import React from 'react'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class TodoList extends React.Component {
  state = {
    disabled: false,
    todoList:[
      {
        content: '1',
        extra: 'extra content',
        arrow: 'horizontal'
      },
      {
        content: '内容2',
        extra: 'extra2222222222222222',
        arrow: ''
      },
      {
        content: '内容3',
        extra: 'extra3333333333333',
        arrow: 'horizontal'
      }
    ]
  }

  render() {
    return (<div>
      {
        this.state.todoList.map((item,index) => {
          return <List className="my-list" key={index}>
            <Item extra={item.extra} arrow={item.arrow}>{item.content}</Item>
          </List>
        })
      }
    </div>);
  }
}