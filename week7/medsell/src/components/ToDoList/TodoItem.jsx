// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div className={`flex justify-between items-center p-2 ${todo.completed ? 'line-through' : ''}`}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
    );
};

export default TodoItem;
