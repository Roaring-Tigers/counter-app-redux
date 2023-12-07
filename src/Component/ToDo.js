import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addTodo,deleteTodo,updateTodo} from "../redux/actions/todoActions"


const ToDo = () => {
     const [text, setText] = useState('')
     const todoArr = useSelector(state=>state.todo);
     const [updateId, setUpdateId] = useState("")
     const dispatch = useDispatch();

    //  console.log(todoArr)


     function implementSubmit(e){
         e.preventDefault()
         if(updateId == ""){
         dispatch(addTodo({id: todoArr.length+1, title: text}))
         }
         else{
               dispatch(updateTodo(updateId, text))
               setUpdateId("")
         }
         setText('')
     }

        function implementUpdate(item){
            setUpdateId(item.id)
            setText(item.title)
        }


    return( 
        <div>
            <h2>{updateId!=""?"Update TODO": "Add TODO"}</h2>
            <form onSubmit={implementSubmit}>
                <input type="text" placeholder={updateId!=""?"Update TODO": "Add TODO"}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
                <button type="submit">{updateId!=""?"Update TODO": "Add TODO"}</button>
            </form>
          <ul>
            {
                todoArr.length > 0 && todoArr.map(item=>(
                       <li key={item.id}>
                               {item.title}  
                               <button onClick={()=>dispatch(deleteTodo(item.id))}> D </button>
                               <button onClick={()=>implementUpdate(item)}> U </button>
                       </li>
                ))
            }
        </ul>
        </div>
    )
}

export default ToDo;