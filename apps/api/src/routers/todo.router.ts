import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";

const router = Router();
const controller = new TodoController();

router.get("/", controller.getAll.bind(controller));
router.post("/", controller.create.bind(controller));
router.put("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));

export const TodoRouter = router;
