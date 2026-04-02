export interface NodeResponseDTO {
  _id: string;
  name: string;
  children: NodeResponseDTO[];
}
