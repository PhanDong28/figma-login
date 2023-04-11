import React from 'react';


export interface MyComponentProps {
    id: string;
    value: string;
    completed: boolean;
  }

function App(): JSX.Element {
    
    
    return (
        <div>
        <div id="title" className="text-center text-[100px] text-[#ead7d7]">
             todos
        </div>
        <input 
            id="input" 
            className="todos items-center px-[60px] py-[16px] bg-[white] w-full shadow-xl outline-none box-border m-0 text-xl b-0 text-start" 
            type="text" 
            placeholder="What need to be done?" />
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