
import { createNode, deleteNode, getAllNodes } from "@services/node.service";
import { HttpStatusCodes } from "@shared/constants/httpStatusCode";
import { SUCCESS_MESSAGES } from "@shared/constants/messages";
import { createNodeSchema } from "@validators/node.validator";
import { NextFunction, Request, Response } from "express";



export const CreateNodeController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const result = createNodeSchema.safeParse(req.body);

        if(!result.success){
            res.status(HttpStatusCodes.BAD_REQUEST).json({
                success: false,
                message: result.error.issues[0].message
            });

            return;
        }

        const data = result.data;

        await createNode(data?.name,data.parentId ?? null);

        

        res.status(HttpStatusCodes.CREATED).json({
            success: true,
            message: SUCCESS_MESSAGES.NODE_CREATED_SUCCESSFULLY
        });

    } catch (error) {
        next(error);
    }
};


export const GetAllNodesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const nodes = await getAllNodes();

        res.status(HttpStatusCodes.OK).json({
            success: true,
            message: SUCCESS_MESSAGES.NODES_FETCHED_SUCCESSFULLY,
            data: nodes
        });
    } catch (error) {
        next(error);
    }
};



export const DeleteNodeController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params as {id:string};

        await deleteNode(id);

        res.status(HttpStatusCodes.OK).json({
            success: true,
            message: SUCCESS_MESSAGES.NODE_DELETED_SUCCESSFULLY
        });
    } catch (error) {
        next(error);
    }
};