
import  { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actionTypes';

export const addTodo = (newToDo) => {
    return {
        type: ADD_TODO,
        payload: newToDo,
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    }

}

export const updateTodo = (id, text) => {
    console.log(id, text)
    return {
        type: UPDATE_TODO,
        update_id: id,
        update_text: text,
    }
}







// todo = {
//     id: 1, 
//     title: 'Learn Redux',
// }