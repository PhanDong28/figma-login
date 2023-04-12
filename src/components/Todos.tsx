import { type ITodo } from '../App'
import React from 'react'

interface Props {
  todos: ITodo[]
}

function Todos({ todos }: Props): JSX.Element {
  return (
    <div>
    <ul className="text-gray-600 text-[24px] bg-white">
      {todos.map(todo => (
        <li className="py-[16px] group px-[20px] border-solid border-b-2 border-gray-300 flex items-center justify-between">
          <div className="flex items-center w-full">
            <i className={`bx ${todo.completed ? 'bx-check-square' : 'bx-square'} text-[30px] cursor-pointer`}></i>
            <div contentEditable={true} className={`pl-[10px] w-full ${todo.completed ? 'line-through' : ''}`}>
              {todo.value}
            </div>
          </div>
          <i className="bx bx-x text-[30px] cursor-pointer invisible group-hover:visible float-right"></i>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Todos