import { Router } from "express";

let router = Router();

router.route("/").get((req, res) => {
  console.log("Hello");
  res.send({
    message: "ok",
  });
});

export default router;
