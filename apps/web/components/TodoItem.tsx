"use client";
interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export default function TodoItem({ todo }: { todo: Todo }) {
    return (
        <li className="flex justify-between items-center border p-2 rounded">
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.title}
            </span>
            <span>{todo.completed ? "✅" : "⬜"}</span>
        </li>
    );
}
