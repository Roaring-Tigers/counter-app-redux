// createContext() 
import {createStore} from 'redux';
import counterReducer from './reducer/counterReducer.js';


// console.log("helllo from store.js")

const store = createStore(counterReducer)

export default store


// counterReducer()

// dispatch({type: 'INCREMENT'})

// store => counterReducer(0, {type: 'INCREMENT'})  => 1


// dispatch({type: 'INCREMENT', value: 10})

// store => counterReducer(0, {type: 'INCREMENT', value: 10})  =>