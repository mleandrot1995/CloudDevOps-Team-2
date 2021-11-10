import { Router } from "express";

const route = Router();

route
  .get("/", (req, res) => {
    res.json({ status: "successfull" });
  })
  .post("/", () => {
    res.json({ status: "successfull" });
  });

export default route;
