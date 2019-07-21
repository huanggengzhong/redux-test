import React, { Component } from 'react'

import 'antd/dist/antd.css'

import { Input, Button, List } from 'antd'
import store from './store/index'
// const data = [
//   '早8点开晨会，分配今天的开发工作',
//   '早9点和项目经理作开发需求讨论会',
//   '晚5:30对今日代码进行review'
// ]

class TodoList extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState())
    this.onChangeValue=this.onChangeValue.bind(this)
    this.state = store.getState()
  }
  render() {
    return (
      <div>
        <div>
          <Input placeholder="jspang" style={{ width: '250px',margin:'10px' }}  onChange={this.onChangeValue} />
          <Button type="primary">增加</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
          <List
            size="small"
         
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    )
  };
  onChangeValue(e){
    console.log(e.target.value);
    const action ={
      type:'changeInput',
      value:e.target.value

    }
    store.dispatch(action);
    
  }
}

export default TodoList
