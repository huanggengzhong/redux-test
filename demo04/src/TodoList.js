import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store/store'


class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState());
    
    this.state = store.getState();
    this.changValue=this.changValue.bind(this)
    this.myChange=this.myChange.bind(this)
    // 订阅者
    store.subscribe(this.myChange)
  }
  myChange(){
    this.setState(store.getState())
  }
  changValue(e){
    const action={
      type:'inputValue',
      value:e.target.value
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <div>
          <Input style={{ width: '200px' }} placeholder="Write something" onChange={this.changValue}  value={this.state.inputValue}/>
          <Button type="primary" style={{ marginLeft: '10px' }} >增加</Button>
        </div>
        <div style={{ width: '400px',marginTop:'10px' }}>
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    )
  }
}

export default TodoList
