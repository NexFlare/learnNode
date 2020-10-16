import bodyParser from "body-parser";
import express from "express";
import { urlencoded, json } from "body-parser";
import router from "./resources/test/routes";
import studentRouter from "./resources/students/routes";
import { connect } from "./utils/connect";
export const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const log = (req, res, next) => {
  console.log("Hello logging");
  next();
};

app.use(log);

app.use("/api", router);
app.use("/student", studentRouter);

app.get("/", (req, res) => {
  res.send({
    hello: "world",
  });
});

export const start = async () => {
  await connect();
  app.listen(3001, () => {
    console.log("Server running on 3001");
  });
};
