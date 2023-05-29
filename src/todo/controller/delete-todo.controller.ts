import { Request, Response } from "express";
import { DeleteTodo } from "../types";
import deleteTodoService from "../services/delete-todo.service";

const deleteTodoController = async (req: Request, res: Response) => {
    try {
        const params = req.params;
        const data : DeleteTodo = {
            _id: params._id
        }
        const response = await deleteTodoService(data);
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
            tag: "DELETE_TODO_CONTROLLER_FAILED"
        });
    }
};

export default deleteTodoController;