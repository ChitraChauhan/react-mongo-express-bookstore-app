import { createStore } from "redux";
import reducers from "../reducers";

const store = createStore(reducers);
console.log(store.getState())
// store.subscribe(() => console.log('Look ma, Redux!!'))
// console.log(store.dispatch( addTodo({ title: 'TaskA', id: 0, finished: false }) ))

export default store;