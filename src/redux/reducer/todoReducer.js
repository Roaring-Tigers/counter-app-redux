import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/actionTypes'



const initialState = []


const todoReducer = (state = initialState, action) => {
      if(action.type === ADD_TODO){
            return [...state, action.payload]
      }
      else if(action.type == DELETE_TODO){
             return state.filter(todo=> todo.id != action.payload)
      }
      else if(action.type == UPDATE_TODO){
            console.log(action.update_id, action.update_text)
             const newArr=[]
             for(let t of state){
                   if(t.id == action.update_id){
                         newArr.push({id: t.id, title: action.update_text})
                   }
                   else{
                      newArr.push(t)
                   }
             }
                return newArr
      }
      else{
            return state
      }
           
}

export default todoReducer



// [
//     {
//         id: 1,
//         title: 'Learn Redux',
//     },
//     {
//         id: 2,
//         title: 'Learn React',
//     },
//     {
//         id: 3,
//         title: 'Learn React Native',
//     }
// ]