import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increase, decrease, reset} from "../redux/actions/counterActions"

const Hello = () => {

    const {count} = useSelector(state=>state); // {count: 0}

    const dispatch = useDispatch();

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Hello;