import TodoModel from "../entities/todo.entity";
import { UpdateTodo } from "../types";

const updateTodoService = async (updateData : UpdateTodo) => {
    try {
        const updatedQuery = await TodoModel.findById(updateData._id);
        if(updatedQuery === null) {
            return {
                status: "failed",
                message: "Todo not found",
                error: "Todo not found",
                tag: "UPDATE_TODO_SERVICE_FAILED"
            }
        }
        else {
        if (updateData.title) {
            updatedQuery.title = updateData.title;
        }
        if (updateData.description) {
            updatedQuery.description = updateData.description;
        }
        if (updateData.status) {
            updatedQuery.status = updateData.status === "active" ? "active" : "inactive";
        }
        const updatedTodo = await updatedQuery.save();
        return {
            status: "success",
            message: "Todo updated successfully",
            data: updatedTodo,
            tag: "UPDATE_TODO_SERVICE_SUCCESS"
        }
    }
    }
    catch (error: any) {
        return {
            status: "failed",
            message: error?.message,
            error: error,
            tag: "UPDATE_TODO_SERVICE_FAILED"
        }
    }
};


export default updateTodoService;