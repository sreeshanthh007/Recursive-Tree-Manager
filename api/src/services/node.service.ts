import nodeModel, { INode } from "@models/node.model";
import { NodeResponseDTO } from "@dto/node.dto";

export const createNode =  async(name:string,parentId?:string | null) =>{


    await nodeModel.create({
        name,
        parentId: parentId || null
    });
};


export const getAllNodes = async (parentId: string | null = null): Promise<NodeResponseDTO[]> => {
    const nodes = await nodeModel.find({ parentId }).lean() as INode[];
    
    return Promise.all(
        nodes.map(async (node: INode) => {
            return {
                _id: String(node._id),
                name: node.name,
                children: await getAllNodes(String(node._id))
            };
        })
    );
};


export const deleteNode = async (nodeId: string): Promise<void> => {

  const deleteRecursively = async (id: string): Promise<void> => {
    
    const children = await nodeModel.find({ parentId: id });

    for (const child of children) {
      await deleteRecursively(child._id.toString());
    }

    await nodeModel.findByIdAndDelete(id);
  };

  await deleteRecursively(nodeId);
};