import { Request, Response } from "express";
import updateTodoService from "../services/update-todo.service";

const updateTodoController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const response = await updateTodoService(data);
        if(response.status === "success") {
            return res.status(200).json(response);
        }
        else {
            return res.status(400).json(response);
        }
    }
    catch (error) {
        return res.status(500).json({
            status: "failed",
            message: "Something went wrong",
            error: error,
            tag: "UPDATE_TODO_CONTROLLER_FAILED"
        });
    }
};

export default updateTodoController;