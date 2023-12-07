
import {createStore, combineReducers} from 'redux';
import counterReducer from './reducer/counterReducer.js';
import todoReducer from './reducer/todoReducer.js';

const rootReducer = combineReducers({
       counter: counterReducer,
       todo: todoReducer,
})




const store = createStore(rootReducer)

export default store










// counterReducer()

// dispatch({type: 'INCREMENT'})

// store => counterReducer(0, {type: 'INCREMENT'})  => 1


// dispatch({type: 'INCREMENT', value: 10})

// store => counterReducer(0, {type: 'INCREMENT', value: 10})  =>