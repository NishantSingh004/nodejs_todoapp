import mongoose from "mongoose";
import { User } from "./user.js";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    

    // below code: Is It Necessary to Use Every Time?
    // When to Use: Use this pattern when you need to establish a relationship between documents in different collections. It's commonly used in applications with user-generated content, where items need to be associated with specific users.
    
    // When Not to Use: If a relationship between collections is not needed, or if the field does not represent a reference to another document, you don't need to use mongoose.Schema.Types.ObjectId and ref.
    
    // In summary, this code snippet is essential for creating a linked relationship between different models in a MongoDB database, enabling you to perform more complex queries and maintain data integrity.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now()
    },
  }
)

export const Task = mongoose.model("Task", schema);