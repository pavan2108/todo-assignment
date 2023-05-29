import TodoModel from "../entities/todo.entity";
import { Pagination } from "../types";

const getAllTodoService = async (pagination : Pagination) => {
    try {
        const { page, limit } = pagination;
        const skip = (page - 1) * limit;
        const query = await TodoModel.find().skip(skip).limit(limit);
        const total = await TodoModel.countDocuments();
        return {
            status: "success",
            message: "Todo get successfully",
            data: {data: query, total: total},
            tag: "GET_ALL_TODO_SERVICE_SUCCESS"
        }
    }
    catch (error: any) {
        return {
            status: "failed",
            message: error?.message,
            error: error,
            tag: "GET_ALL_TODO_SERVICE_FAILED"
        }
    }
};

export default getAllTodoService;