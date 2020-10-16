import { Router } from "express";
import { createStudent } from "./controller";

const studentRouter = Router();

studentRouter
  .route("/")
  .get((req, res) => {
    res.send({
      message: "ok",
    });
  })
  .post(createStudent, (req, res) => {
    res.send({
      message: "Working on it",
    });
  });

export default studentRouter;
