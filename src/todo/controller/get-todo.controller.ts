import { Request, Response } from "express";
import { GetTodo } from "../types";
import getTodoService from "../services/get-todo.service";

const getTodoController = async (req: Request, res: Response) => {
    try {
        const params = req.params;
        const data : GetTodo = {
            _id: params._id
        }
        const response = await getTodoService(data);
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
            tag: "GET_TODO_CONTROLLER_FAILED"
        });
    }
};

export default getTodoController;