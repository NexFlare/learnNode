import mongoose from "mongoose";

const student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("student", student);

export default Student;
