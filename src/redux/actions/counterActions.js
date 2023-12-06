import { INCREASE,DECREASE, RESET } from "./actionTypes.js";


// action creators =>  functions which will return actions 

// actions => objects

export const increase = (value=1) => {

    return {
        type: INCREASE,
        value: value
    }
}

export const decrease = () => {

    return {
        type: DECREASE
    }
}

export const reset = () => {

    return {
        type: RESET
    }
}


