import { Request, Response } from "express";
import getAllTodoService from "../services/get-all-todo.service";

const getAllTodoController = async (req: Request, res: Response) => {
    try {
        const paginationQuery = req.query;
        const pagination = {
            page: parseInt(paginationQuery.page as string),
            limit: parseInt(paginationQuery.limit as string)
        }
        const { page, limit } = pagination;
        const skip = (page - 1) * limit;
        const response = await getAllTodoService({
            page: page,
            limit: skip
        });
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
            tag: "GET_ALL_TODO_CONTROLLER_FAILED"
        });
    }
};

export default getAllTodoController;