



import express from "express";
import { CreateNodeController, DeleteNodeController, GetAllNodesController } from "@controllers/node.controller";

const Router = express.Router();

Router.post("/create-node", CreateNodeController);

Router.get("/get-all-nodes", GetAllNodesController);

Router.delete("/delete-node/:id",DeleteNodeController);


export default Router;