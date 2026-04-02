


export interface Node {
  _id: string;
  name: string;
  parentId: string | null;
  children: Node[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateNodeRequest{
    name:string
    parentId:string | null
}

