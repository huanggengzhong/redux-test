// 设置默认数据
const defaultState={
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}

//暴露一个方法,这个方法有两个参数:state,action,在方法里将state返回
export default (state=defaultState,action)=>{
    // console.log(state,action);
    //reducer只能接收state,不能修改
    if(action.type==="changeInput"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==='addItem'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type==='deleteItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}