import Student from "./model";

export const createStudent = async (req, res, next) => {
  //const reqStudent = req.body();
  console.log(req.body);
  const student = await Student.create(req.body);
  next();
};
