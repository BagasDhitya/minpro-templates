import TodoList from "../../components/TodoList";

export default function TodoPage() {
    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <TodoList />
        </main>
    );
}
