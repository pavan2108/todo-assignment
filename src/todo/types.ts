// Todo app type for creation with description and status optional

type Todo = {
    title: string;
    description?: string;
};

// Todo app type for page and limit values
type Pagination = {
    page: number;
    limit: number;
};

// Todo app type for returing paginated todos
type PaginatedTodo = {
    todos: Todo[];
};

// Todo app type for updating a todo
type UpdateTodo = {
    _id: string;
    title?: string;
    description?: string;
    status?: string;
};

// Todo app type for deleting a todo
type DeleteTodo = {
    _id: string;
};

// Todo app type for getting a todo
type GetTodo = {
    _id: string;
};


export type { Todo, Pagination, PaginatedTodo, UpdateTodo, DeleteTodo, GetTodo };