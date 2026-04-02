import { Document, model, Schema, Types } from "mongoose";


export interface INode extends Document {

    name:string

    parentId: Types.ObjectId | null

    createdAt:Date

    updatedAt: Date
}


const NodeSchema = new Schema<INode>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    parentId: {
        type: Types.ObjectId,
        ref: 'Node',
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default model<INode>('Node', NodeSchema)