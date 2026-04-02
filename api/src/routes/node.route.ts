



import express from "express"
import { CreateNodeController } from "@controllers/node.controller"

const Router = express.Router()

Router.post("/create-node", CreateNodeController)



export default Router