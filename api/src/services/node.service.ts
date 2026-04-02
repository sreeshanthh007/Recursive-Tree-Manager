import nodeModel from "@models/node.model"



export const createNode =  async(name:string,parentId?:string | null) =>{


    await nodeModel.create({
        name,
        parentId: parentId || null
    });
}