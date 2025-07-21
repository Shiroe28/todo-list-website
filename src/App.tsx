import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem: Todo = {
                id: Date.now(),
                title: newTodo,
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        title={todo.title} 
                        completed={todo.completed} 
                        onToggle={() => toggleTodo(todo.id)} 
                        onRemove={() => removeTodo(todo.id)} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;