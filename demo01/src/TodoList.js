//快速生成imrc,ccc
import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        
    this.state=store.getState()//调用仓库的getStore方法,里面保存了管理员的state值,它就是inputValue和list
    this.changeInputValue=this.changeInputValue.bind(this)
    this.storeChange=this.storeChange.bind(this)
    this.clickBtn=this.clickBtn.bind(this)
    // this.deleteItem=this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
    }
    
    render() { 
        return (
             <div style={{margin:'10px'}}> 
                <div>
                <Input placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}}
                onChange={this.changeInputValue}
                value={this.state.inputValue}
                ></Input>
                <Button type='primary'
                onClick={this.clickBtn}
                >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                <List 
                bordered
                dataSource={this.state.list}
                renderItem={(item,index)=>{
                  return  <List.Item onClick={this.deleteItem.bind(this,index)}>
                        {item}
                    </List.Item>   
                }}
                >

                </List>
                </div>
            </div> 
        );
    }
    deleteItem(index){
        // console.log(index);
        const action={
            type:'deleteItem',
            index:index
        }
        store.dispatch(action)
        
    }
    clickBtn(){
        // console.log(11);
        const action={
            type:'addItem'
        }
        store.dispatch(action)
        
    }
    changeInputValue(e){
        // console.log(e.target.value);
        const action={
            type:"changeInput",
            value:e.target.value
        }
        store.dispatch(action)
        
    }
    storeChange(){
       this.setState(store.getState()) 
    }
}
 
export default TodoList;