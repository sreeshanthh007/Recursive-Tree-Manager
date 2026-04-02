import React from 'react';
import type { Node } from '@/types/node';
import { NodeItem } from './NodeItem';


interface NodeTreeProps {
  nodes: Node[];
  onAddNode: (parentId: string | null) => void;
  onDeleteNode: (nodeId: string) => void;
}

export const NodeTree: React.FC<NodeTreeProps> = ({ nodes, onAddNode, onDeleteNode }) => {
  return (
    <div className="flex flex-col gap-2">
      {nodes.map((node) => (
        <NodeItem
          key={node._id}
          node={node}
          onAddNode={onAddNode}
          onDeleteNode={onDeleteNode}
        />
      ))}
    </div>
  );
};