import { Router } from "express";
import createTodoController from "../controller/create-todo.controller";
import getTodoController from "../controller/get-todo.controller";
import getAllTodoController from "../controller/get-all-todo.controller";
import deleteTodoController from "../controller/delete-todo.controller";
import updateTodoController from "../controller/update-todo.controller";

const todoRouter = Router();

todoRouter.post("/create", createTodoController);
todoRouter.get("/get/:_id", getTodoController);
todoRouter.get("/get-all", getAllTodoController);
todoRouter.put("/update", updateTodoController);
todoRouter.delete("/delete/:_id", deleteTodoController);

export default todoRouter;