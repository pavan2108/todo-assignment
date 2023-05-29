import mongoose from "mongoose";


// Create a todo schema

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type:String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
}, {
    timestamps: true,
});

const TodoModel = mongoose.model("Todo", todoSchema);

// Create a model from the schema
export default TodoModel;