import TodoModel from "../entities/todo.entity";
import { Todo } from "../types";
const createTodoService = async (todo: Todo) => {
    try {
        const createdTodo = await TodoModel.create(todo);
        if(!createdTodo) {
            return {
                status: "failed",
                message: "Todo not created",
                tag: "CREATE_TODO_SERVICE_FAILED"
            }
        }
        return {
            status: "success",
            message: "Todo created successfully",
            data: createdTodo,
            tag: "CREATE_TODO_SERVICE_SUCCESS"
        }
    }
    catch (error: any) {
        return {
            status: "failed",
            message: error?.message,
            error: error,
            tag: "CREATE_TODO_SERVICE_FAILED"
        }
    }
}

export default createTodoService;