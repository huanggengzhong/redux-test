import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, List, Input } from 'antd'
import store from './store/store'
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.'
// ]

class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState())

    this.state = store.getState()
    store.subscribe(this.myChange.bind(this))
  }
  myChange(){
    this.setState(store.getState())
  }
  changeValue(e){
    const action={
      type:'inputValue',
      inputValue:e.target.value
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <div>
          <Input style={{ width: '200px' }}  onChange={this.changeValue.bind(this)} value={this.state.inputValue}/>
          <Button type="primary" style={{ marginLeft: '10px' }}>
            增加
          </Button>
        </div>
        <div style={{ marginTop: '10px',width:'400px'}}>
          <List
            size="small"
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
