import { DeleteTodo } from "../types";
import TodoModel from "../entities/todo.entity";

const deleteTodoService = async (deleteTodo: DeleteTodo) => {
    try {
        console.log(deleteTodo);
        const deletedTodo = await TodoModel.findOneAndDelete({_id: deleteTodo._id});
        return {
            status: "success",
            message: "Todo deleted successfully",
            data: deletedTodo,
            tag: "DELETE_TODO_SERVICE_SUCCESS"
        }
    }   
    catch (error: any) {
        return {
            status: "failed",
            message: error?.message,
            error: error,
            tag: "DELETE_TODO_SERVICE_FAILED"
        }
    }
}

export default deleteTodoService;