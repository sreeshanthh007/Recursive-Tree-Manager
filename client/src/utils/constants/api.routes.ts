

const NODE_ROUTES = {

    CREATE_NODE:"/create-node",
    GET_ALL_NODES:"/get-all-nodes",
    DELETE_NODE:(id:string)=>`/delete-node/${id}`
}


export default NODE_ROUTES