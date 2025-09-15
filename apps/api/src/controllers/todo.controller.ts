import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

const todoService = new TodoService();

export class TodoController {
    async getAll(req: Request, res: Response) {
        const todos = await todoService.getAll();
        res.json(todos);
    }

    async create(req: Request, res: Response) {
        const { title } = req.body;
        const todo = await todoService.create(title);
        res.json(todo);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { completed } = req.body;
        const todo = await todoService.update(id, completed);
        res.json(todo);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await todoService.delete(id);
        res.json({ message: "Todo deleted" });
    }
}
