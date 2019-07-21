const defaultState={
    inputValue:'',
    list:[
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
}
export default (state=defaultState,action)=>{
    if(action.type==='inputValue'){
        console.log(state,action);
        
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.inputValue;
        return newState
    }
    return state
}