import TodoModel from "../entities/todo.entity";
import { GetTodo } from "../types";

const getTodoService = async (getTodo: GetTodo) => {
    try {
        const getQuery = await TodoModel.findOne({_id: getTodo._id});
        if(getQuery === null) {
            return {
                status: "failed",
                message: "Todo not found",
                error: "Todo not found",
                tag: "GET_TODO_SERVICE_FAILED"
            }
        }
        else {
        return {
            status: "success",
            message: "Todo get successfully",
            data: getQuery,
            tag: "GET_TODO_SERVICE_SUCCESS"
        }
        }
    }
    catch (error: any) {
        return {
            status: "failed",
            message: error?.message,
            error: error,
            tag: "GET_TODO_SERVICE_FAILED"
        }
    }
};

export default getTodoService;