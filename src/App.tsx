import React from 'react';
import Todos from './components/todos';
import { useRef,useState, useEffect } from 'react';

export interface ITodo {
    id: string;
    value: string;
    completed: boolean;
  }
  const TODO_APP_URL = 'https://6411e02cf9fe8122ae168796.mockapi.io'

  const createTodo = async ({ value, completed }: Omit<ITodo, 'id'>): Promise<ITodo | undefined> => {
    try {
      const res = await fetch(`${TODO_APP_URL}/todosInfor`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ value, completed })
      })
      const data = await res.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }


function App(): JSX.Element {
    const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const onKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    try {
      if (event.key === 'Enter' && inputRef.current?.value.trim() !== '') {
        const newTodo = await createTodo({ value: inputRef.current?.value ?? '', completed: false })
        if (newTodo) {
          setTodos(todos => [...todos, newTodo])
        }
        console.log('nhap thanh cong')
      }
      
    } catch (error) {
      console.error('Error to adding',error)
    }
  }

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        const res = await fetch(`${TODO_APP_URL}/todosInfor`)
        const data = await res.json()
        setTodos(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTodos()
  }, [])

    return (
        <div>
        <div id="title" className="text-center text-[100px] text-[#ead7d7]">
             todos
        </div>
        <input 
            ref={inputRef} 
            onKeyDown={onKeyDown}
            className="todos items-center px-[60px] py-[16px] bg-[white] w-full shadow-xl outline-none box-border m-0 text-xl b-0 text-start" 
            type="text" 
            placeholder="What need to be done?" 
            />
            <Todos todos={todos} />
            <ul id="list" className="bg-[white] text-xl text-gray-500"> 
            </ul> 
        <div className="bg-white w-full px-[20px] py- grid grid-cols-[1fr_2fr_1fr] shadow-xl"> 
        <p id="count" className="  items-center  w-full outline-none box-border m-0 text-xl b-0 text-start mt-[10px]"></p>
        <div data-todo="filters" className="flex justify-between items-center border-b-2 border-gray-300 pt-[16px] mt-[16px]">
            <a href="#/" className="block ">All</a>
            <a href="#/active" className="block ">Active</a>
            <a href="#/completed" className="block">Completed</a>
          </div>
        </div>
            <footer className="infor mt-[60px] text-[#9C9C9C] text-center text-[14px]">
                <p>Double-click to edid a todo</p>
                <p>Created by <a href="https://www.facebook.com/gdp28/">PhanDong</a></p>
                <p>Part of <a href="https://todomvc.com/">TodoMVC</a></p>
            </footer>
        </div>
    );
} 

export default App;