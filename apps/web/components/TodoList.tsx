"use client";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/todos")
            .then((res) => res.json())
            .then(setTodos);
    }, []);

    const addTodo = async () => {
        const res = await fetch("http://localhost:8000/api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTodo }),
        });
        const data = await res.json();
        setTodos([...todos, data]);
        setNewTodo("");
    };

    return (
        <div className="bg-white shadow p-4 rounded">
            <div className="flex gap-2 mb-4">
                <input
                    className="border rounded p-2 flex-1"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new task..."
                />
                <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
