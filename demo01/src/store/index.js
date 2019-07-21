// 引入createStore方法
import {createStore} from 'redux';

import  reducer from './reducer'

//调用createStore方法
const store =createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// 暴露出去
export default store;