const defaultState={
    inputValue:'Write Something',
    list:[
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}
export default (state=defaultState,action)=>{
    console.log(state,action);
    if(action.type==='changeInput'){//说明发生了值改变
        const newState=JSON.parse(JSON.stringify(state))//深度拷贝一份旧的state值,reducer是无法修改原始值的
        newState.inputValue=action.value;
        return newState
    }
    
    return state
}