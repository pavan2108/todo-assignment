import { Request, Response } from "express";
import TodoModel from "../entities/todo.entity";
import createTodoService from "../services/create-todo.service";
import { Todo } from "../types";

const createTodoController = async (req: Request, res: Response) => {
    try {
        const todoBody : Todo = req.body;
        const response = await createTodoService(todoBody);
        if(response.status === "success") {
            return res.status(200).json(response);
        }
        else {
            return res.status(400).json(response);
        }
    }
    catch (error: any) {
        return res.status(500).json({
            status: "failed",
            message: error?.message,
            error: error,
            tag: "CREATE_TODO_CONTROLLER_FAILED"
        });
    }
};

export default createTodoController;