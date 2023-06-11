import { Request, Response, response } from "express";
const bodyParser = require("body-parser");
import { MyData } from "./Interface/student";

const express = require("express");
const { getData } = require("./modules/load");
const { sortLexicograph } = require("./modules/ortLexicograph");
const { searchbycollege } = require("./modules/college");

const app = express();
let result: MyData[];

app.use(express.json());

app.get("/allstudents", async (req: Request, res: Response) => {
  console.log("Data was send");
  if (!result) {
    result = await getData();
  }

  res.send(result);
});

app.post("/college", async (req: Request, res: Response) => {
  console.log("Data post");
  if (!result) {
    result = await getData();
  }
  try {
    const collegeName: string = await req.body.college;
    if (collegeName) {
      res.send(searchbycollege(result, collegeName));
    } else {
      res.status(400).send("Bad Request: College name is missing");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/sort", async (req: Request, res: Response) => {
  console.log("Sort Lex");
  if (!result) {
    result = await getData();
  }
  res.send(sortLexicograph(result));
});

const port = 5000;

const start = async () => {
  try {
    app.listen(port, console.log("Server is listening 5000..."));
  } catch (error) {
    console.log(error);
  }
};
start();
