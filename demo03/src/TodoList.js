import React, { Component } from 'react'
import store from './store/store'
import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'



class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState());
    this.storeChange=this.storeChange.bind(this)
    this.state = store.getState()
    // 组件订阅,不订阅的话在input有value值的时候不会发生变化
    store.subscribe(this.storeChange)
  }
  changeValue(e){
    // console.log();
    const action={
      type:'inputValue',
      value:e.target.value
    }
    store.dispatch(action)
    
   
  }
  storeChange(){
    this.setState(store.getState())
  }
  render() {
    return (
      <div>
        <div>
          <Input placeholder="Write something" style={{ width: '200px' }} onChange={this.changeValue.bind(this)} value={this.state.inputValue}/>
          <Button type="primary" style={{ marginLeft: '10px' }}>
            增加
          </Button>
        </div>
        <div style={{ width: '300px', margin: '10px' }}>
          <List
            size="large"
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
