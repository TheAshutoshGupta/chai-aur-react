import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:"Hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>
            todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            const temp=state.todos.findIndex((todo)=>todo.id===action.payload.id)
            state.todos[temp].text=action.payload.text
        }
    }
}) 

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;