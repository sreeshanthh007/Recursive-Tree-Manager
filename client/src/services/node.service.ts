import AxiosInstance from "@/lib/axios";
import type { CreateNodeRequest } from "@/types/node";
import NODE_ROUTES from "@/utils/constants/api.routes";




export const CreateNode = async(data:CreateNodeRequest) =>{
    
    const response = await AxiosInstance.post(NODE_ROUTES.CREATE_NODE,data)

    return response.data
}


export const GetAllNodes = async() =>{
    const response = await AxiosInstance.get(NODE_ROUTES.GET_ALL_NODES)
    return response.data.data
}


export const DeleteNode = async(id:string) =>{
    const response = await AxiosInstance.delete(NODE_ROUTES.DELETE_NODE(id))
    return response.data
}
