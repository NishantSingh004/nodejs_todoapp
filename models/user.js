import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    // In Mongoose, which is a popular ODM (Object Data Modeling) library for MongoDB and Node.js, the select: false option is used in a schema to exclude a particular field from query results by default.
    //  Using select: false is a best practice when dealing with sensitive data such as passwords. It ensures that such fields are not accidentally exposed in places where they shouldn't be, while still allowing you to access them when needed with explicit selection. This approach helps maintain security and data integrity within your application.

     createdAt: {
      type: Date,
      default: Date.now()
    },
  }
)

export const User = mongoose.model("Users", schema);
