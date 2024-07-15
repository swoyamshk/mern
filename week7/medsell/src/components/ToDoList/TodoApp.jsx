// src/components/TodoApp.js
import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    };

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <div className="flex">
                <input 
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    className="flex-grow p-2 border rounded" 
                    placeholder="Add a new task" 
                />
                <button onClick={addTodo} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Add</button>
            </div>
            <TodoList 
                todos={todos} 
                toggleComplete={toggleComplete} 
                removeTodo={removeTodo} 
            />
        </div>
    );
};

export default TodoApp;
