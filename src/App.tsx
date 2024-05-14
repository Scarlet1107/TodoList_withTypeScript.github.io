import React from 'react';
import { ChangeEvent, useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  type Todo = {
    id: number;
    inputValue: string;
    checked: boolean;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if (!inputValue) return;
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    }
    );
    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    }
    );
    setTodos(newTodos);
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <h2 className='text-4xl font-bold flex justify-center mt-12'>Todoリスト with TypeScript</h2>
      <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center mt-5 mb-12'>
        <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          placeholder='タスクを追加' />
        <input type="submit"
          value="作成"
          className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />
      </form>
      <ul className="mt-5 space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-center space-x-4">
            <input
              className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
              type="text"
              onChange={(e) => handleEdit(todo.id, e.target.value)}
              value={todo.inputValue}
              disabled={todo.checked}
            />
            <input type="checkbox" onChange={() => handleChecked(todo.id, todo.checked)} className="form-checkbox h-5 w-5 text-blue-600" />
            <button onClick={() => handleDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">消</button>
          </li>
        )
        )}

      </ul>
    </>
  );
}

export default App;