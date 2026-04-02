



import express from "express"
import { CreateNodeController, GetAllNodesController } from "@controllers/node.controller"

const Router = express.Router()

Router.post("/create-node", CreateNodeController)

Router.get("/get-all-nodes", GetAllNodesController)




export default Router